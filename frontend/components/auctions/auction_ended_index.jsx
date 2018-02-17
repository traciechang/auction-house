import React from "react";
import AuctionEndedDetailContainer from "./auction_ended_detail_container";

class AuctionEndedIndex extends React.Component {
    constructor(props) {
        super(props);

        this.allAuctions = this.allAuctions.bind(this);
    }

    allAuctions() {
        console.log("in aucion ended index, allauctions method")
        console.log(this.props.auctions)
        return Object.keys(this.props.auctions).map(key => (
            <li 
            key={key}><AuctionEndedDetailContainer auction={this.props.auctions[key]}/>
            </li>
        ))
    }

    render() {
        return (
            <div className="auction-index">
                <ul className="column-headers">
                    <li>Item</li>
                    <li>Level</li>
                    <li>Time Ended</li>
                    <li>Buyer</li>
                    <li>Sold Price</li>
                </ul>
                <ul className="auctions-list">{this.allAuctions()}</ul>
            </div>
        )
    }
}

export default AuctionEndedIndex;