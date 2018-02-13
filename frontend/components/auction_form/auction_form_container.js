import { connect } from "react-redux";
import AuctionForm from "./auction_form";
import { createAuction } from "../../actions/auction_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
    createAuction: (auction) => dispatch(createAuction(auction))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuctionForm);