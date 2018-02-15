import { connect } from "react-redux";
import BidForm from "./bid_form";
import { createBid } from "../../actions/bid_actions";
import { updateAuction } from "../../actions/auction_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    // update sttate tree
    // selectedAuctionId: ""
});

const mapDispatchToProps = dispatch => ({
    createBid: (bid) => dispatch(createBid(bid)),
    updateAuction: (auction) => dispatch(updateAuction(auction))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BidForm);