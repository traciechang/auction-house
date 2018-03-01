import { connect } from "react-redux";
import { fetchAuction } from "../../actions/auction_actions";
import AuctionActiveDetail from "./auction_active_detail";

const mapStateToProps = state => ({
    items: state.entities.items,
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    fetchAuction: (auction_id) => dispatch(fetchAuction(auction_id))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(AuctionActiveDetail);