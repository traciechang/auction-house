import React from "react";
import AuctionEndedDetailContainer from "./auction_ended_detail_container";

class AuctionEndedIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    allAuctions = () => {
        if (Object.keys(this.props.auctions).length === 0) {
            return (
                <div className="text-center no-auctions">None to display.</div>
            )
        } else {
            return Object.keys(this.props.auctions).map(key => (
                <li 
                key={key}><AuctionEndedDetailContainer auction={this.props.auctions[key]}/>
                </li>
            ))
        }
    }

    render() {
        return (
            <div className="auction-index">
                <ul className="row text-light justify-content-between column-headers">
                    <li class="col-xs-12 col-sm-7 col-md-4">Item</li>
                    <li class="col-lg-1 d-none d-lg-block">Level</li>
                    <li class="col-md-3 d-none d-md-block">Time Ended</li>
                    <li class="col-lg-1 d-none d-lg-block">Buyer</li>
                    <li class="col-sm-3 col-md-2 d-none d-sm-block">Sold Price</li>
                </ul>
                <ul className="auctions-list">{this.allAuctions()}</ul>
            </div>
        )
    }
}

export default AuctionEndedIndex;