import { connect } from "react-redux";
import MyAuctions from "./my_auctions";
import { fetchMyAuctions } from "../../actions/auction_actions";
import { selectActiveAuctions, selectEndedAuctions } from "../../reducers/selectors";

const mapStateToProps = state => ({
    activeAuctions: selectActiveAuctions(state),
    endedAuctions: selectEndedAuctions(state)
});

const mapDispatchToProps = dispatch => ({
    fetchMyAuctions: (auctions) => dispatch(fetchMyAuctions(auctions))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyAuctions);