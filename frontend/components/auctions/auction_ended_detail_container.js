import { connect } from "react-redux";
import AuctionEndedDetail from "./auction_ended_detail";

const mapStateToProps = state => ({
    items: state.entities.items,
    users: state.entities.users
})

export default connect(
    mapStateToProps, null
)(AuctionEndedDetail);