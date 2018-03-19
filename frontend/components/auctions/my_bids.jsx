import React from "react";
import AuctionActiveIndex from "./auction_active_index";
import AuctionEndedIndex from "./auction_ended_index";

class MyBids extends React.Component {
    constructor(props) {
        super(props);

        this.displayActiveBids = this.displayActiveBids.bind(this);
        this.displayEndedBids = this.displayEndedBids.bind(this);
    }

    // Note: I started putting the fetch in componentDidMount, resulting in errors. It worked w/ WillMount, however.
    componentWillMount() {
        this.props.fetchMyBidAuctions();
    }

    handleAuctionClick() {

    }

    render() {
        return (
            <div class="my-bids">
                <h1 class="text-center">My Bids</h1>
                <div>
                    <h3 class="text-light">Active Bids</h3>
                    <AuctionActiveIndex auctions={this.props.activeAuctions} handleAuctionClick={this.handleAuctionClick}/>
                </div>

                <div>
                    <h3 class="text-light">Ended Auctions</h3>
                    <AuctionEndedIndex auctions={this.props.endedAuctions}/>
                </div>
            </div>
        )
    }
}

export default MyBids;