import React from "react";
import AuctionActiveIndex from "../auctions/auction_active_index";
import SearchFormContainer from "../search/search_form_container";
import FilterFormContainer from "../search/filter_form_container";
import BidFormContainer from "../bid/bid_form_container";

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchAuctions();
    }

    render() {
        return (
            <div>
                <h1 className="browse-h1">Browse Auctions</h1>
                <SearchFormContainer />
                <FilterFormContainer />
                <AuctionActiveIndex auctions={this.props.auctions}/>
                <BidFormContainer />
            </div>
        )
    }
}

export default Browse;