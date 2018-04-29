import React from "react";
import ItemsModal from "../modal/items_modal";
import Item from "./item";

class AuctionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUser.id,
            inventory_item_id: "",
            starting_bid: "",
            buyout: "",
            duration: "",
            selected_inventory_item_id: "",
            errors: []
        }
    }

    componentDidMount() {
        const { currentUser, fetchUser } = this.props;
        
        fetchUser(currentUser.id);

        $('#exampleModal').on('hidden.bs.modal', () => {
            this.setState({
                "selected_inventory_item_id": ""
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                "errors": nextProps.errors
            })
        }
    }; 

    displayItem = () => {
        let itm;
        if (this.state.inventory_item_id) {
            itm = this.props.items[this.props.currentUser.inventory_items[this.state.inventory_item_id].item_id];

            return (
                <Item item={itm} />
            )
        }
    }
    
    errors() {
        return this.state.errors.map(err => <li class="text-center text-light" key={err}>{err}</li>)
    }

    handleItemClick = (e) => {
        this.setState({
            "selected_inventory_item_id": e.currentTarget.value
        })
    };

    handleModalSubmit = (e) => {
        e.preventDefault();
        this.setState({
            "inventory_item_id": this.state.selected_inventory_item_id
        })
    };

    handleSubmit = (e) => {
        const { createAuction, history, updateInventoryItem } = this.props;

        e.preventDefault();
        createAuction(this.state).then(() => {
            updateInventoryItem({
                id: this.state.inventory_item_id,
                for_sale: true
            });

            history.push('/auctions');
        })
    }

    itemModal = () => {
        let sellable_items = [];
        const inventoryItems = this.props.currentUser.inventory_items ? this.props.currentUser.inventory_items : {};

        if (Object.keys(inventoryItems).length === 0) {
            return (
                <div class="text-light">Your inventory is empty.</div>
            )
        } else {
            Object.keys(inventoryItems).forEach(key => {
                if (!inventoryItems[key].for_sale) {
                    sellable_items.push(inventoryItems[key])
                }
            })
    
            return sellable_items.map(invItem => {
                let itemObj = this.props.items[invItem.item_id];
                let selectedItem = "false";
    
                if (invItem.id === this.state.selected_inventory_item_id) {
                    selectedItem = "true";
                }
    
                return (
                    <li onClick={this.handleItemClick} key={invItem.id} value={invItem.id} class="col-xs-3 tooltip-test auction-form-img" title={itemObj.name} selected-item={selectedItem}><img className="" src={itemObj.image_url} item-quality={itemObj.quality}/></li>
                )
            })
        }
    }

    render() {
        return (
            <div class="container-fluid auction-form">
                <h1>Create an Auction</h1>

                <div class="row">
                    <ul class="mx-auto session-form-errors">{this.errors()}</ul>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="auction-form-input col-md-5 mx-auto d-flex">
                            {this.displayItem()}

                            <div class="button-div ml-auto">
                            <button type="button" class="btn btn-primary auction-form-modal-trigger" data-toggle="modal" data-target="#exampleModal">
                            Select Item
                            </button>
                            </div>
                        </div>
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

                <ItemsModal items={this.itemModal()} handleModalSubmit={this.handleModalSubmit}/>
            </div>
        )
    }

    update = (key) => {
        return e => this.setState({[key]: parseInt(e.target.value)})
    };
}

export default AuctionForm;