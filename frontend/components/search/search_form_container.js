import { connect } from "react-redux";
import SearchForm from "./search_form";
import { fetchAuctions } from "../../actions/auction_actions";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    fetchAuctions: (auctions) => dispatch(fetchAuctions(auctions))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);