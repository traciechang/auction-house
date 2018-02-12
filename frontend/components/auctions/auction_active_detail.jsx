import React from "react";

class AuctionActiveDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const auction = this.props.auction;
        const item = this.props.items[auction.inventory_item_id];
        

        return (
            <div>
                <ul>
                    <li><img src={item.image_url}/></li>
                    <li>{item.name}</li>
                    <li>{item.level}</li>
                    <li>{typeof Date.parse(auction.end_time)}</li>
                    <li>{new Date(auction.end_time) - new Date()}</li>
                    <li>Seller username!</li>
                    <li>Current bid!</li>
                    <li>{auction.buyout}</li>
                </ul>
            </div>
        )
    }
}

export default AuctionActiveDetail;