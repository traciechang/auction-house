import React from "react";

class BidForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUser.id,
            auction_id: this.props.selectedAuction.id,
            amount: this.props.selectedAuction.bid ? this.props.selectedAuction.bid.amount + 1 : 1,
            minimum_bid: this.props.selectedAuction.bid ? this.props.selectedAuction.bid.amount + 1 : 1
        }
        
        this.handleBid = this.handleBid.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleBuyout = this.handleBuyout.bind(this);
        this.handleReceiveNewBid = this.handleReceiveNewBid.bind(this);
    }

    componentDidMount() {
        const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
        this.sub = cable.subscriptions.create('AuctionChannel', {
            received: this.handleReceiveNewBid
        })
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                "user_id": this.props.currentUser.id,
                "auction_id": nextProps.selectedAuction.id, 
                "amount": nextProps.selectedAuction.bid ? nextProps.selectedAuction.bid.amount + 1 : 1,
                "minimum_bid": nextProps.selectedAuction.bid ? nextProps.selectedAuction.bid.amount + 1 : 1})
        }
    }

    handleBid(e) {
        e.preventDefault();
        this.props.createBid(this.state).then(alert("Bid submitted successfully.")).then(this.setState({
            "user_id": this.props.currentUser.id,
            "auction_id": this.props.selectedAuction.id,
            "amount": ""
        }))
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
        console.log("in bid form, render")
        console.log(this.state.minimum_bid)
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

    // resetState() {
    //     this.setState({
    //         "user_id": "",
    //         "auction_id": "",
    //         "amount": ""
    //     })
    // };
}

export default BidForm;