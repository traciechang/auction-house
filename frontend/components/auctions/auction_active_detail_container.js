import { connect } from "react-redux";
import AuctionActiveDetail from "./auction_active_detail";

const mapStateToProps = state => ({
    items: state.entities.items
})

export default connect(
    mapStateToProps, null
)(AuctionActiveDetail);