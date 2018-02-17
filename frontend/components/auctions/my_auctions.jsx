import React from "react";
import AuctionActiveIndex from "./auction_active_index";
import AuctionEndedIndex from "./auction_ended_index";

class MyAuctions extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.fetchMyAuctions();
    }

    handleAuctionClick() {

    }

    render() {
        return (
            <div>
                <h1>My Auctions</h1>
                <div>
                    <h3>Active Auctions</h3>
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

export default MyAuctions;