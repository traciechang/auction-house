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
        this.props.history.push('/auctions');
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createAuction(this.state)
        .then(this.props.updateInventoryItem({
            id: this.state.inventory_item_id,
            for_sale: true
        }))
    }

    itemDropdown() {
        let sellable_items = [];

        this.props.currentUser.inventory_items.forEach(inventoryItem => {
            if (!inventoryItem.for_sale) {
                sellable_items.push(inventoryItem)
            }
        });

        return sellable_items.map(invItem => {
            let itemObj = this.props.items[invItem.item_id];

            return (
                <option key={invItem.id} value={invItem.id}>{itemObj.name}</option>
            )
        })
    };

    render() {
        return (
            <div className="auction-form">
                <h1>Create an Auction</h1>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.update("inventory_item_id")}>
                        {this.itemDropdown()}
                    </select>

                    <div className="auction-form-input">
                        <label>Starting Bid</label>
                        <input onChange={this.update("starting_bid")} type="number" min="1" value={this.state.starting_bid}/>
                    </div>

                    <div className="auction-form-input">
                        <label>Buyout</label>
                        <input onChange={this.update("buyout")} type="number" min="1" value={this.state.buyout}/>
                    </div>
                    
                    <div className="auction-form-input">
                        <label>Duration</label>
                        <select onChange={this.update("duration")}>
                            <option selected disabled hidden>--Select--</option>
                            <option value={1}>1 Hour</option>
                            <option value={12}>12 Hours</option>
                            <option value={24}>24 Hour</option>
                            <option value={48}>48 Hour</option>
                        </select>
                    </div>
                    <button className="auction-form-button">Create Auction</button>
                </form>
            </div>
        )
    }

    update(key) {
        return e => this.setState({[key]: parseInt(e.target.value)})
    };
}

export default AuctionForm;