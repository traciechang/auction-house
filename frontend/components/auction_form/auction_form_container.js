import { connect } from "react-redux";
import AuctionForm from "./auction_form";
import { createAuction } from "../../actions/auction_actions";
import { updateInventoryItem } from "../../actions/inventory_item_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
    createAuction: (auction) => dispatch(createAuction(auction)),
    updateInventoryItem: (inventoryItem) => dispatch(updateInventoryItem(inventoryItem)),
    fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuctionForm);