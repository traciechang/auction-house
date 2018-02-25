import React from "react";
import ActionCable from "actioncable";

class BidForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            user_id: this.props.currentUser.id,
            auction_id: this.props.selectedAuction.id,
            amount: this.props.selectedAuction.bid ? this.props.selectedAuction.bid.amount + 1 : 1,
            message: ""
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
    }

    handleReceiveNewBid(stormy) {
        console.log("inside handleReceiveNewBid")
        console.log(stormy)
        this.setState({"message": stormy.amount})
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                "auction_id": nextProps.selectedAuction.id, 
                "amount": nextProps.selectedAuction.bid ? nextProps.selectedAuction.bid.amount + 1 : 1})
        }
    }

    handleBid(e) {
        e.preventDefault();
        this.props.createBid(this.state).then(alert("Bid submitted successfully.")).then(this.resetState())
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
        }).then(alert("Buyout successful.")).then(this.resetState());
    };

    handleUpdate(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    };

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <form onSubmit={this.handleBid}>
                    <label>Bid Amount
                        <input value={this.state.amount} onChange={this.handleUpdate("amount")} min={this.props.selectedAuction.bid ? this.props.selectedAuction.bid.amount + 1 : 1} type="number"/>
                    </label>
                    <button>Bid</button>
                </form>
                <button onClick={this.handleBuyout}>Buyout</button>
            </div>
        )
    }

    resetState() {
        this.setState({
            "user_id": "",
            "auction_id": "",
            "amount": ""
        })
    };
}

export default BidForm;