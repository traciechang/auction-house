import React from "react";
import AuctionActiveIndex from "./auction_active_index";
import AuctionEndedIndex from "./auction_ended_index";

class MyBids extends React.Component {
    constructor(props) {
        super(props);
    }

    // Note: I started putting the fetch in componentDidMount, resulting in errors. It worked w/ WillMount, however.
    componentWillMount() {
        this.props.fetchMyBidAuctions();
    }

    handleAuctionClick() {

    }

    render() {
        console.log("in my bids, render")
        console.log(this.props.activeAuctions)
        return (
            <div>
                <h1>My Bids</h1>
                <div>
                    <h3>Active Bids</h3>
                    <AuctionActiveIndex auctions={this.props.activeAuctions} handleAuctionClick={this.handleAuctionClick}/>
                </div>

                <div>
                    <h3>Ended Auctions</h3>
                    <AuctionEndedIndex auctions={this.props.endedAuctions}/>
                </div>
            </div>
        )
    }
}

export default MyBids;