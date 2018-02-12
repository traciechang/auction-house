import { connect } from "react-redux";
import AuctionActiveDetail from "./auction_active_detail";

const mapStateToProps = state => ({
    items: state.entities.items,
    users: state.entities.users
})

export default connect(
    mapStateToProps, null
)(AuctionActiveDetail);