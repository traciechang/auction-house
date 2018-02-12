import { connect } from "react-redux";
import Browse from "./browse";
import { fetchAuctions } from "../../actions/auction_actions";

const mapStateToProps = state => ({
    auctions: state.entities.auctions,
    // items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
    fetchAuctions: () => dispatch(fetchAuctions())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Browse);

