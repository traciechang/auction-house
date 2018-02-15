import React from "react";

class BidForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            user_id: this.props.currentUser.id,
            auction_id: 
            this.props.selectedAuction.id,
            amount: 
            this.props.selectedAuction.bid ? this.props.selectedAuction.bid.amount + 1 : 1
        }
        
        this.handleBid = this.handleBid.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
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
        // currently, no global state change from this. might want to fetchallauctions again?
        this.props.createBid(this.state);
        // pop up window that tells u Bid sumbitted successfully.
    }

    handleBuyout() {
        this.setState({[auction_id]: this.props.selectedAuction.id,[amount]: this.props.selectedAuction.buyout});
        this.props.createBid(this.state);
        // need to update auction to change end_time the user clicked buyout
        // note that if you generate time now in js, format will be different from other end times that are generated in ruby. might want to double check if this is compatible in the end, and if not, perhaps convert to ruby time in controller before updating?
        // But everything just got easier w/ duration!! =)
        this.props.updateAuction({
            [user_id]: this.selectedAuction.user_id,
            [inventory_item_id]: this.selectedAuction.inventory_item_id,
            [starting_bid]: this.selectedAuction.starting_bid,
            [buyout]: this.selectedAuction.buyout,
            [duration]: 0
        });
    };

    handleUpdate(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    };

    render() {
        // console.log("in bidform")
        // console.log(this.props.selectedAuction.id)
        // console.log(this.state.auction_id)
        // console.log(this.state.amount)
        return (
            <div>
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
}

export default BidForm;