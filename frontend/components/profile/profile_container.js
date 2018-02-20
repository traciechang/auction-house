import { connect } from "react-redux";
import Profile from "./profile";
import { selectActiveAuctions } from "../../reducers/selectors";
import { fetchMyAuctions } from "../../actions/auction_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    selling: Object.keys(selectActiveAuctions(state)).length,
    // items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
    fetchMyAuctions: (auctions) => dispatch(fetchMyAuctions(auctions))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);