import React from "react";
import AuctionActiveIndex from "../auctions/auction_active_index";

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchAuctions();
    }

    render() {
        return (
            <div>
                <h1 className="browse-h1">Browse Auctions</h1>
                <AuctionActiveIndex auctions={this.props.auctions}/>
            </div>
        )
    }
}

export default Browse;