import { connect } from "react-redux";
import MyBids from "./my_bids";
import { fetchMyBidAuctions } from "../../actions/auction_actions";
import { selectActiveAuctions, selectEndedAuctions } from "../../reducers/selectors";

const mapStateToProps = state => ({
    activeAuctions: selectActiveAuctions(state),
    endedAuctions: selectEndedAuctions(state)
});

const mapDispatchToProps = dispatch => ({
    fetchMyBidAuctions: (auctions) => dispatch(fetchMyBidAuctions(auctions))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBids);