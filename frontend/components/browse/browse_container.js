import { connect } from "react-redux";
import Browse from "./browse";
import { fetchAuctions } from "../../actions/auction_actions";
import { selectActiveAuctions } from "../../reducers/selectors";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    auctions: selectActiveAuctions(state),
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchAuctions: () => dispatch(fetchAuctions()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Browse);

