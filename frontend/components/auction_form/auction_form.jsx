import React from "react";

class AuctionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUser.id,
            inventory_item_id: "",
            starting_bid: "",
            buyout: "",
            duration: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.itemDropdown = this.itemDropdown.bind(this);
    }

    componentWillReceiveProps() {

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createAuction(this.state);
    }

    itemDropdown() {
        return this.props.currentUser.inventory_items.map(item => {
            let itemObj = this.props.items[item.item_id];
            
            return (
                <option key={item.id} value={item.id}>{itemObj.name}</option>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Create an Auction</h1>
                <form onSubmit={this.handleSubmit}>
                    <select>
                        {this.itemDropdown()}
                    </select>

                    <label>Starting Bid
                        <input onChange={this.update("starting_bid")} type="number" min="1" value={this.state.starting_bid}/>
                    </label>
                    <label>Buyout
                        <input onChange={this.update("buyout")} type="number" min="1" value={this.state.buyout}/>
                    </label>
                    <label>Duration
                        <select onChange={this.update("duration")}>
                            <option value={this.state.duration} selected disabled hidden>--Select--</option>
                            <option value={1}>1 Hour</option>
                            <option value={12}>12 Hours</option>
                            <option value={24}>24 Hour</option>
                            <option value={48}>48 Hour</option>
                        </select>
                    </label>
                    <button>Create Auction</button>
                </form>
            </div>
        )
    }

    update(key) {
        return e => this.setState({[key]: e.target.value})
    };
}

export default AuctionForm;