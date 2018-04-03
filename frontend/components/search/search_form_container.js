import { connect } from "react-redux";
import SearchForm from "./search_form";
import { fetchAuctions } from "../../actions/auction_actions";

const mapDispatchToProps = dispatch => ({
    fetchAuctions: (auctions) => dispatch(fetchAuctions(auctions))
});

export default connect(
    null,
    mapDispatchToProps
)(SearchForm);