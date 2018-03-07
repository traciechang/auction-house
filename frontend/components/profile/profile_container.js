import { connect } from "react-redux";
import Profile from "./profile";
import { selectSellingAuctions, selectWonAuctions } from "../../reducers/selectors";
import { fetchAuctions } from "../../actions/auction_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    selling: selectSellingAuctions(state),
    won: selectWonAuctions(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAuctions: (auctions) => dispatch(fetchAuctions(auctions)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);