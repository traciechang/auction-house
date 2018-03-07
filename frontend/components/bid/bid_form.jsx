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
            minimum_bid: min_bid
        }
        
        this.handleBid = this.handleBid.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleBuyout = this.handleBuyout.bind(this);
        this.handleReceiveNewBid = this.handleReceiveNewBid.bind(this);
        this.calculateDeposit = this.calculateDeposit.bind(this);
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

    calculateDeposit() {
        return this.props.fetchBid(this.props.selectedAuction.id).done(response => {
            console.log("in bid form, calculateDeposit")
            console.log(response)
            console.log(this.state.amount)
            let deposit_amt = response.amount ? this.state.amount - response.amount : this.state.amount;
            console.log(deposit_amt)
            return this.props.updateInventory({"id": this.props.currentUser.inventory.id, "gold": this.props.currentUser.inventory.gold - deposit_amt})
        });
    };

    handleBid(e) {
        console.log("in bid form, handle bid")
        e.preventDefault();
        this.props.createBid(this.state)
        .then(() => {
            return this.calculateDeposit()
        })
        .then(() => {
            return alert("Bid submitted successfully.")
        })
    };

    handleBuyout() {
        this.props.createBid({
            "user_id": this.props.currentUser.id,
            "auction_id": this.props.selectedAuction.id,
            "amount": this.props.selectedAuction.buyout
        })
   
        this.props.updateAuction({
            "id": this.props.selectedAuction.id,
            "user_id": this.props.selectedAuction.user_id,
            "inventory_item_id": this.props.selectedAuction.inventory_item_id,
            "starting_bid": this.props.selectedAuction.starting_bid,
            "buyout": this.props.selectedAuction.buyout,
            "duration": 0
        }).then(alert("Buyout successful.")).then(this.props.handleAuctionClick.bind(this, ""));
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
            <div>
                <form onSubmit={this.handleBid}>
                    <label>Bid Amount
                        <input value={this.state.amount} onChange={this.handleUpdate("amount")} min={this.state.minimum_bid} type="number"/>
                    </label>
                    <button>Bid</button>
                </form>
                <button onClick={this.handleBuyout}>Buyout</button>
            </div>
        )
    }
}

export default BidForm;