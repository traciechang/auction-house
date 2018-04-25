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
    }

    componentWillMount() {
        this.props.fetchAuctions();
        if (this.props.currentUser) {
            this.props.fetchUser(this.props.currentUser.id);
        }
    }

    displayBidForm() {
        if (this.props.currentUser && this.state.selectedAuction) {
            return <BidFormContainer selectedAuction={this.state.selectedAuction}/>
        }
    };

    handleAuctionClick = (auction) => {
        this.setState({"selectedAuction": auction});
    }

    handleFilterClick = (filter) => {
        this.setState({"selectedFilter": filter})
    };

    render() {
        return (
            <div class="browse">
                <h1 className="text-center browse-h1">Browse Auctions</h1>
                <SearchFormContainer selectedFilter={this.state.selectedFilter} handleFilterClick={this.handleFilterClick}/>

                <div class="container-fluid">
                    <div class="row filter-form-auction-index-div">
                        <FilterFormContainer handleFilterClick={this.handleFilterClick} selectedFilter={this.state.selectedFilter}/>
                        <div class="col-md-9">
                            <AuctionActiveIndex auctions={this.props.auctions} handleAuctionClick={this.handleAuctionClick} selectedAuction={this.state.selectedAuction} isBrowse={true}/>
                        </div>
                    </div>
                </div>

                {this.displayBidForm()}
            </div>
        )
    }
}

export default Browse;