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

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
    }

    componentWillReceiveProps() {
        if (this.state.inventory_item_id) {
            this.props.history.push('/auctions')
        }
    };

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
        const inventoryItems = this.props.currentUser.inventory_items;

        Object.keys(inventoryItems).forEach(key => {
            if (!inventoryItems[key].for_sale) {
                sellable_items.push(inventoryItems[key])
            }
        })

        return sellable_items.map(invItem => {
            let itemObj = this.props.items[invItem.item_id];

            return (
                <option key={invItem.id} value={invItem.id}>{itemObj.name}</option>
            )
        })
    };

    render() {
        // return (
        //     <div className="auction-form">
        //         <h1>Create an Auction</h1>
        //         <form onSubmit={this.handleSubmit}>
        //             <select onChange={this.update("inventory_item_id")}>
        //                 <option selected disabled hidden>-- Select Item --</option>
        //                 {this.itemDropdown()}
        //             </select>

        //             <div className="auction-form-input">
        //                 <label>Starting Bid</label>
        //                 <input onChange={this.update("starting_bid")} type="number" min="1" value={this.state.starting_bid}/>
        //             </div>

        //             <div className="auction-form-input">
        //                 <label>Buyout</label>
        //                 <input onChange={this.update("buyout")} type="number" min="1" value={this.state.buyout}/>
        //             </div>
                    
        //             <div className="auction-form-input">
        //                 <label>Duration</label>
        //                 <select onChange={this.update("duration")}>
        //                     <option selected disabled hidden>--Select--</option>
        //                     <option value={1}>1 Hour</option>
        //                     <option value={12}>12 Hours</option>
        //                     <option value={24}>24 Hour</option>
        //                     <option value={48}>48 Hour</option>
        //                 </select>
        //             </div>
        //             <button className="auction-form-button">Create Auction</button>
        //         </form>
        //     </div>
        // )

        // 

        return (
            <div class="container-fluid auction-form">
                <h1>Create an Auction</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <select class="col-md-5 mx-auto" onChange={this.update("inventory_item_id")}>
                            <option selected disabled hidden>-- Select Item --</option>
                            {this.itemDropdown()}
                        </select>
                    </div>

                    <div class="row">
                        <div className="col-md-5 mx-auto auction-form-input">
                            <label class="text-light">Starting Bid</label>
                            <input onChange={this.update("starting_bid")} type="number" min="1" value={this.state.starting_bid}/>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col-md-5 mx-auto auction-form-input">
                            <label class="text-light">Buyout</label>
                            <input onChange={this.update("buyout")} type="number" min="1" value={this.state.buyout}/>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div className="col-md-5 mx-auto auction-form-input">
                            <label class="text-light">Duration</label>
                            <select onChange={this.update("duration")}>
                                <option selected disabled hidden>--Select--</option>
                                <option value={1}>1 Hour</option>
                                <option value={12}>12 Hours</option>
                                <option value={24}>24 Hour</option>
                                <option value={48}>48 Hour</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <button className="col-md-5 mx-auto auction-form-button">Create Auction</button>
                    </div>
                </form>
            </div>
        )
    }

    update(key) {
        return e => this.setState({[key]: parseInt(e.target.value)})
    };
}

export default AuctionForm;