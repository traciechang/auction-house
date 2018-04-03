import React from "react";
import AuctionActiveDetailContainer from "./auction_active_detail_container";

class AuctionActiveIndex extends React.Component {
    constructor(props) {
        super(props);

        this.allAuctions = this.allAuctions.bind(this);
    }

    allAuctions() {
        const selectedAuction = this.props.selectedAuction;

        if (!this.props.isBrowse && (Object.keys(this.props.auctions).length === 0)) {
            return (
                <div className="text-center no-auctions">There are currently no active auctions.</div>
            )
        } else {
            return Object.keys(this.props.auctions).map(key => {
                let auc = "false";
                if (selectedAuction && (selectedAuction.id === this.props.auctions[key].id)) {
                    auc = "true";
                } 

                return (
                    <li key={key}><AuctionActiveDetailContainer auction={this.props.auctions[key]} handleAuctionClick={this.props.handleAuctionClick} selectedAuction={auc}/></li>
                )
            })
        }
    }

    render() {
        return (
            <div class="auction-index">
                <ul className="row column-headers text-light justify-content-between">
                    <li class="col-xs-12 col-sm-7 col-md-4">Item</li>
                    <li class="col-lg-1 d-none d-lg-block">Level</li>
                    <li class="col-md-3 d-none d-md-block">Time Left</li>
                    <li class="col-lg-1 d-none d-lg-block">Seller</li>
                    <li class="col-sm-3 col-md-2 d-none d-sm-block">Current Bid</li>
                </ul>
                <ul className="auctions-list">{this.allAuctions()}</ul>
            </div>
        )
    }
}

export default AuctionActiveIndex;