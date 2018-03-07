import { connect } from "react-redux";
import BidForm from "./bid_form";
import { createBid, fetchBid } from "../../util/bid_api_util";
import { updateAuction } from "../../actions/auction_actions";
import { updateInventory } from "../../actions/inventory_actions";
import { updateInventoryItem } from "../../actions/inventory_item_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    createBid: (bid) => createBid(bid),
    updateAuction: (auction) => dispatch(updateAuction(auction)),
    updateInventory: (inventory) => dispatch(updateInventory(inventory)),
    fetchBid: (auction_id) => fetchBid(auction_id),
    updateInventoryItem: (inventoryItem) => dispatch(updateInventoryItem(inventoryItem))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BidForm);