import React from "react";

class AuctionActiveDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.auction.id}</li>
                </ul>
            </div>
        )
    }
}

export default AuctionActiveDetail;