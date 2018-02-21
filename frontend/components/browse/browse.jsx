import React from "react";
import AuctionActiveIndex from "../auctions/auction_active_index";
import SearchFormContainer from "../search/search_form_container";
import FilterFormContainer from "../search/filter_form_container";
import BidFormContainer from "../bid/bid_form_container";

class Browse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedAuction: "",
            selectedFilter: ""
        }

        this.handleAuctionClick = this.handleAuctionClick.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchAuctions();
    }

    displayBidForm() {
        if (this.props.currentUser && this.state.selectedAuction) {
            return <BidFormContainer selectedAuction={this.state.selectedAuction}/>
        }
    };

    handleAuctionClick(auction) {
        this.setState({"selectedAuction": auction});
    }

    handleFilterClick(filter) {
        this.setState({"selectedFilter": filter})
    };

    render() {
        console.log("in browse")
        console.log(this.state.selectedFilter)
        return (
            <div className="browse">
                <h1 className="browse-h1">Browse Auctions</h1>
                <SearchFormContainer selectedFilter={this.state.selectedFilter}/>
                <div className="browse-filter-index">
                    <FilterFormContainer handleFilterClick={this.handleFilterClick}/>
                    <AuctionActiveIndex auctions={this.props.auctions} handleAuctionClick={this.handleAuctionClick}/>
                </div>
                {this.displayBidForm()}
            </div>
        )
    }
}

export default Browse;