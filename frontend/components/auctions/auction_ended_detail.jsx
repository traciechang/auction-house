import React from "react";

class AuctionEndedDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const auction = this.props.auction;
        const item = this.props.items[auction.item_id.id];

        return (
            <div className="auction-detail">
                <ul>
                    <li><img src={item.image_url}/></li>
                    <li>{item.name}</li>
                    <li>{item.level}</li>
                    <li>{this.convertTime()}</li>
                    <li>{auction.bid ? auction.bid.username : "-"}</li>
                    <div className="auction-detail-bid">
                        <li>{auction.bid ? auction.bid.amount : 0}</li>
                        <li>Buyout Price {auction.buyout}</li>
                    </div>
                </ul>
            </div>
        )
    }

    convertTime() {
        const d = new Date(this.props.auction.end_time)
        return `${d.toDateString()} ${d.toLocaleTimeString()}`;
    }
};

export default AuctionEndedDetail;