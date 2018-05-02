import React from "react";
import BidModal from "../modal/bid_modal";

class BidForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUser.id,
            auction_id: this.props.selectedAuction.id,
            amount: this.minimumBid(this.props),
            minimum_bid: this.minimumBid(this.props),
            modal_message: "",
        }
    }

    componentDidMount() {
        App.cable.subscriptions.create('BidChannel', {
            received: this.receiveNewBid
        })
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            let min_bid = this.minimumBid(nextProps);

            if (nextProps.selectedAuction.id === this.props.selectedAuction.id) {
                this.setState({
                    "amount": ""
                })
            } else {
                this.setState({
                    "user_id": this.props.currentUser.id,
                    "auction_id": nextProps.selectedAuction.id, 
                    "amount": min_bid,
                    "minimum_bid": min_bid})
            }
        }
    }

    calculateBuyoutDifference = () => {
        const { selectedAuction, currentUser } = this.props;
        return this.props.fetchBid(selectedAuction.id).done(response => {
            let amt_owed = response.amount ? selectedAuction.buyout - response.amount : selectedAuction.buyout;

            return this.props.updateInventory({"id": currentUser.inventory.id, "gold": currentUser.inventory.gold - amt_owed})
        })
    }

    calculateDeposit = () => {
        return this.props.fetchBid(this.props.selectedAuction.id).done(response => {
            let deposit_amt = response.amount ? this.state.amount - response.amount : this.state.amount;

            return this.props.updateInventory({"id": this.props.currentUser.inventory.id, "gold": this.props.currentUser.inventory.gold - deposit_amt})
        });
    };

    buyoutButton = () => {
        if (this.props.selectedAuction.buyout) {
            return (
                <button class="buyout-button" onClick={this.handleBuyout}>Buyout</button>
            )
        }
    }

    handleBid = (e) => {
        e.preventDefault();
        if (this.state.amount > this.props.currentUser.inventory.gold) {
            this.setState({"modal_message": "You do not have enough gold to submit this bid."});
            $("#exampleModal").modal("show");
        } else {
            this.props.createBid(this.state)
            .then(() => {
                return this.calculateDeposit()
            })
            .then(() => {
                this.setState({"modal_message": "Your bid was submitted successfully."});
                $("#exampleModal").modal("show");
            })
        }
    };

    handleBuyout = (e) => {
        e.preventDefault();
        if (this.props.selectedAuction.buyout > this.props.currentUser.inventory.gold) {
            this.setState({"modal_message": "You do not have enough gold for this buyout."});
            $("#exampleModal").modal("show");
        } else {
            this.props.createBid({
                "user_id": this.props.currentUser.id,
                "auction_id": this.props.selectedAuction.id,
                "amount": this.props.selectedAuction.buyout
            }).then(() => {
                return this.calculateBuyoutDifference()
            }).then(() => {
                this.props.updateAuction({
                    "id": this.props.selectedAuction.id,
                    "duration": 0
                })
            }).then(() => {
                this.setState({"modal_message": "Buyout successful."});
                $("#exampleModal").modal("show")
            })
        }
    };

    receiveNewBid = (bid) => {
        if (bid.auction_id === this.props.selectedAuction.id) {
            this.setState({"minimum_bid": bid.amount + 1})
        }
    }

    handleUpdate = (key) => {
        return e => this.setState({[key]: e.currentTarget.value})
    };

    minimumBid = (prop) => {
        if (prop.selectedAuction.bid) {
            return prop.selectedAuction.bid.amount + 1;
        } else if (prop.selectedAuction.starting_bid) {
            return prop.selectedAuction.starting_bid;
        } else {
            return 1;
        };
    }

    render() {
        return (
            <div class="container-fluid bid-form">
                <form class="row d-flex justify-content-end" onSubmit={this.handleBid}>
                    <div class="col-s-4 bid-form-label-input">
                        <label class="text-light bid-amount-label">Bid Amount</label>
                        <input value={this.state.amount} onChange={this.handleUpdate("amount")} min={this.state.minimum_bid} type="number"/>
                    </div>
                    <div class="col-s-4">
                        <button class="bid-button">Bid</button>
                        {this.buyoutButton()}
                    </div>
                </form>

                <BidModal message={this.state.modal_message}/>
            </div>
        )
    }
}

export default BidForm;