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

    displayActiveBids() {
        if (Object.keys(this.props.activeAuctions).length === 0) {
            return (
                <div class="no-active-bids">You currently have no active bids. Visit the Browse page and select an item to start bidding!</div>
            )
        } else {
            return (
                <AuctionActiveIndex auctions={this.props.activeAuctions} handleAuctionClick={this.handleAuctionClick}/>
            )
        }
    }

    displayEndedBids() {
        if (Object.keys(this.props.endedAuctions).length === 0) {
            return (
                <div class="no-ended-bids">No bids to display.</div>
            )
        } else {
            return (
                <AuctionEndedIndex auctions={this.props.endedAuctions}/>
            )
        }
    }

    handleAuctionClick() {

    }

    render() {
        return (
            <div class="my-bids">
                <h1 class="text-center">My Bids</h1>
                <div>
                    <h3 class="text-light">Active Bids</h3>
                    {this.displayActiveBids()}
                </div>

                <div>
                    <h3 class="text-light">Ended Auctions</h3>
                    {this.displayEndedBids()}
                </div>
            </div>
        )
    }
}

export default MyBids;