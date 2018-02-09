import React from "react";
import AuctionActiveDetail from "../auctions/auction_active_detail";

class AuctionActiveIndex extends React.Component {
    constructor(props) {
        super(props);

        this.allAuctions = this.allAuctions.bind(this);
    }

    allAuctions() {
        console.log("in allauctions function")
        console.log(this.props.auctions)
        return Object.keys(this.props.auctions).map(key => (
            <li key={key}><AuctionActiveDetail auction={this.props.auctions[key]}/></li>
        ))
    }

    render() {
        return (
            <div>
                <ul className="column-headers">
                    <li>Item</li>
                    <li>Level</li>
                    <li>Time Left</li>
                    <li>Seller</li>
                    <li>Current Bid</li>
                </ul>
                <ul>{this.allAuctions()}</ul>
            </div>
        )
    }
}

export default AuctionActiveIndex;