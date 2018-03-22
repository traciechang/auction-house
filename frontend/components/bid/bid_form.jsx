import React from "react";

class BidForm extends React.Component {
    constructor(props) {
        super(props);

        let min_bid;
        if (this.props.selectedAuction.bid) {
            min_bid = this.props.selectedAuction.bid.amount + 1
        } else if (this.props.selectedAuction.starting_bid) {
            min_bid = this.props.selectedAuction.starting_bid
        } else {
            min_bid = 1
        };

        this.state = {
            user_id: this.props.currentUser.id,
            auction_id: this.props.selectedAuction.id,
            amount: min_bid,
            minimum_bid: min_bid,
            modal_message: ""
        }
        
        this.handleBid = this.handleBid.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleBuyout = this.handleBuyout.bind(this);
        this.handleReceiveNewBid = this.handleReceiveNewBid.bind(this);
        this.calculateDeposit = this.calculateDeposit.bind(this);
        this.calculateBuyoutDifference = this.calculateBuyoutDifference.bind(this);
        // this.bidSuccessfullMessage = this.bidSuccessfullMessage.bind(this);
        // this.bidUnsuccessfulMessage = this.bidUnsuccessfulMessage.bind(this);
        // this.buyoutSuccessfulMessage = this.buyoutSuccessfulMessage.bind(this);

        // this.modalStatus;
        // this.modalMessage;
    }

    componentDidMount() {
        const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
        this.sub = cable.subscriptions.create('AuctionChannel', {
            received: this.handleReceiveNewBid
        })
    };

    componentWillReceiveProps(nextProps) {
        let min_bid;
        if (nextProps) {

            if (nextProps.selectedAuction.bid) {
                min_bid = nextProps.selectedAuction.bid.amount + 1
            } else if (nextProps.selectedAuction.starting_bid) {
                min_bid = nextProps.selectedAuction.starting_bid
            } else {
                min_bid = 1
            };

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

    // bidSuccessfullMessage() {
    //     this.modalStatus = "Success!";
    //     this.modalMessage = "Your bid was submitted.";
    //     return $("#exampleModal").modal("show");
    // }

    // bidUnsuccessfulMessage() {
    //     this.modalStatus = "l";
    //     this.modalMessage = "You do not have enough gold to submit this bid.";
    //     return $("#exampleModal").modal("show");
    // }

    // buyoutUnsuccessfulMessage() {
    //     return (
    //         <p>Buyout successful.</p>
    //     )
    // }

    // buyoutSuccessfulMessage() {
    //     console.log("in bidform, handlebuyout")
    //     this.modalStatus = "";
    //     this.modalMessage = "Buyout successful.";
    //     console.log(this.modalMessage)
    //     $("#exampleModal").modal("show");
    // }

    calculateBuyoutDifference() {
        this.props.fetchBid(this.props.selectedAuction.id).done(response => {
            let amt_owed = response.amount ? this.props.selectedAuction.buyout - response.amount : this.props.selectedAuction.buyout;
            this.props.updateInventory({"id": this.props.currentUser.inventory.id, "gold": this.props.currentUser.inventory.gold - amt_owed})
        })
    }

    calculateDeposit() {
        return this.props.fetchBid(this.props.selectedAuction.id).done(response => {
            let deposit_amt = response.amount ? this.state.amount - response.amount : this.state.amount;

            return this.props.updateInventory({"id": this.props.currentUser.inventory.id, "gold": this.props.currentUser.inventory.gold - deposit_amt})
        });
    };

    handleBid(e) {
        e.preventDefault();
        if (this.state.amount > this.props.currentUser.inventory.gold) {
            // alert("You do not have enough gold to submit this bid.")
            // this.modalStatus = "l";
            // this.modalMessage = "You do not have enough gold to submit this bid.";
            // return $("#exampleModal").modal("show");
            this.setState({"modal_message": "You do not have enough gold to submit this bid."});
            $("#exampleModal").modal("show");
        } else {
            this.props.createBid(this.state)
            .then(() => {
                return this.calculateDeposit()
            })
            .then(() => {
                // return alert("Bid submitted successfully.")
                // this.modalStatus = "Success!";
                // this.modalMessage = "Your bid was submitted.";
                // return $("#exampleModal").modal("show");
                this.setState({"modal_message": "Your bid was  submitted successfully."});
                $("#exampleModal").modal("show");
            })
        }
    };

    handleBuyout(e) {
        e.preventDefault();
        if (this.props.selectedAuction.buyout > this.props.currentUser.inventory.gold) {
            alert("You do not have enough gold for this buyout.")
        } else {
            this.props.createBid({
                "user_id": this.props.currentUser.id,
                "auction_id": this.props.selectedAuction.id,
                "amount": this.props.selectedAuction.buyout
            })
       
            this.calculateBuyoutDifference();
    
            // this.props.updateAuction({
            //     "id": this.props.selectedAuction.id,
            //     "duration": 0
            // }).then(() => {
            //     this.modalStatus = "";
            //     this.modalMessage = "Buyout successful.";
            //     return $("#exampleModal").modal("show");
            // }).then(this.props.handleAuctionClick.bind(this, ""));
            const modal = $("#exampleModal");

            this.props.updateAuction({
                "id": this.props.selectedAuction.id,
                "duration": 0
            }).then(() => this.props.handleAuctionClick.bind(this, "")).then(() => {
                // console.log("in bidform, handlebuyout")
                // this.modalStatus = "";
                // this.modalMessage = "Buyout successful.";
                // console.log(this.modalMessage)
                // $("#exampleModal").modal("show");
                console.log('sup');
                console.log("in bidFOrm, handleBuyout");
                this.setState({"modal_message": "Buyout successful."});
                modal.modal("show")
                console.log(this.state.modal_message)
            })
        }
    };

    handleReceiveNewBid(bid) {
        if (bid.auction_id === this.props.selectedAuction.id) {
            this.setState({"minimum_bid": bid.amount + 1})
        }
    }

    handleUpdate(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    };

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
                    <button class="buyout-button" onClick={this.handleBuyout}>Buyout</button>
                    </div>
                </form>

                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Sup</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {this.state.modal_message}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default BidForm;