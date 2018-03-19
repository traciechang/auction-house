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
                <div>There are currently no active auctions.</div>
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
                <div>No bids to display.</div>
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
                    <AuctionActiveIndex auctions={this.props.activeAuctions} handleAuctionClick={this.handleAuctionClick}/>
                </div>

                <div>
                    <h3 class="text-light">Ended Auctions</h3>
                    <AuctionEndedIndex auctions={this.props.endedAuctions}/>
                    {/* {this.displayEndedBids()} */}
                </div>
            </div>
        )
    }
}

export default MyBids;