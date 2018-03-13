import React from "react";
import AuctionActiveDetailContainer from "./auction_active_detail_container";

class AuctionActiveIndex extends React.Component {
    constructor(props) {
        super(props);

        this.allAuctions = this.allAuctions.bind(this);
    }

    allAuctions() {
        return Object.keys(this.props.auctions).map(key => (
            <li 
            key={key}><AuctionActiveDetailContainer auction={this.props.auctions[key]} handleAuctionClick={this.props.handleAuctionClick}/>
            </li>
        ))
    }

    render() {
        return (
            <div class="auction-index">
                <ul className="column-headers text-light">
                    <div className="item-div">
                        <li>Item</li>
                    </div>
                    <div className="level-time-user">
                        <li>Level</li>
                        <li>Time Left</li>
                        <li>Seller</li>
                    </div>
                    <li>Current Bid</li>
                </ul>
                <ul className="auctions-list">{this.allAuctions()}</ul>
            </div>
        )
    }
}

export default AuctionActiveIndex;