import { connect } from "react-redux";
import AuctionForm from "./auction_form";
import { createAuction } from "../../actions/auction_actions";
import { updateInventoryItem } from "../../actions/inventory_item_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
    createAuction: (auction) => dispatch(createAuction(auction)),
    updateInventoryItem: (inventoryItem) => dispatch(updateInventoryItem(inventoryItem))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuctionForm);