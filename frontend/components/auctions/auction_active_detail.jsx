import React from "react";

class AuctionActiveDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const auction = this.props.auction;
        const item = this.props.items[auction.inventory_item_id];
        const user = this.props.users[auction.user_id];

        return (
            <div>
                <ul>
                    <li><img src={item.image_url}/></li>
                    <li>{item.name}</li>
                    <li>{item.level}</li>
                    <li>{typeof Date.parse(auction.end_time)}</li>
                    <li>{new Date(auction.end_time) - new Date()}</li>
                    <li>{user.username}</li>
                    <li>{auction.bid ? auction.bid.amount : 0}</li>
                    <li>{auction.buyout}</li>
                </ul>
            </div>
        )
    }
}

export default AuctionActiveDetail;