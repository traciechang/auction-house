import React from "react";

class AuctionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUser.id,
            inventory_item_id: "",
            starting_bid: "",
            buyout: "",
            duration: "",

            selected_item: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        // this.itemDropdown = this.itemDropdown.bind(this);
        this.itemModal = this.itemModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
    }

    componentWillReceiveProps() {
        if (this.state.inventory_item_id) {
            this.props.history.push('/auctions')
        }
    };

    handleItemClick() {

    };

    handleModalSubmit() {

    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createAuction(this.state)
        .then(this.props.updateInventoryItem({
            id: this.state.inventory_item_id,
            for_sale: true
        }))
    }

    // itemDropdown() {
    //     let sellable_items = [];
    //     const inventoryItems = this.props.currentUser.inventory_items ? this.props.currentUser.inventory_items : {};

    //     Object.keys(inventoryItems).forEach(key => {
    //         if (!inventoryItems[key].for_sale) {
    //             sellable_items.push(inventoryItems[key])
    //         }
    //     })

    //     return sellable_items.map(invItem => {
    //         let itemObj = this.props.items[invItem.item_id];

    //         return (
    //             <option key={invItem.id} value={invItem.id}>{itemObj.name}</option>
    //         )
    //     })
    // };

    itemModal() {
        let sellable_items = [];
        const inventoryItems = this.props.currentUser.inventory_items ? this.props.currentUser.inventory_items : {};

        Object.keys(inventoryItems).forEach(key => {
            if (!inventoryItems[key].for_sale) {
                sellable_items.push(inventoryItems[key])
            }
        })

        return sellable_items.map(invItem => {
            let itemObj = this.props.items[invItem.item_id];

            return (
                <li key={invItem.id} value={invItem.id} class="tooltip-test auction-form-img" title={itemObj.name}><img className="" src={itemObj.image_url} item-quality={itemObj.quality}/></li>
            )
        })
    }

    render() {
        return (
            <div class="container-fluid auction-form">
                <h1>Create an Auction</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        {/* <select class="col-md-5 mx-auto" onChange={this.update("inventory_item_id")}>
                            <option selected disabled hidden>-- Select Item --</option>
                            {this.itemDropdown()}
                        </select> */}
                      
                        {/* Modal trigger button */}
                         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Select Item
                </button>
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

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">My Inventory</h5>
                       
                    </div>
                    <div class="modal-body">
                    
                    <ul className="auction-form-modal-list">{this.itemModal()}</ul>
                    
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Ok</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }

    update(key) {
        return e => this.setState({[key]: parseInt(e.target.value)})
    };
}

export default AuctionForm;