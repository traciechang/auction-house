import { connect } from "react-redux";
import BidForm from "./bid_form";
import { createBid } from "../../util/bid_api_util";
import { updateAuction } from "../../actions/auction_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    // createBid: (bid) => dispatch(createBid(bid)),
    createBid: (bid) => createBid(bid),
    updateAuction: (auction) => dispatch(updateAuction(auction))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BidForm);