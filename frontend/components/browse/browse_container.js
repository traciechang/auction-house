import { connect } from "react-redux";
import Browse from "./browse";
import { fetchAuctions } from "../../actions/auction_actions";
import { selectActiveAuctions } from "../../reducers/selectors";

const mapStateToProps = state => ({
    auctions: selectActiveAuctions(state),
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchAuctions: () => dispatch(fetchAuctions())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Browse);

