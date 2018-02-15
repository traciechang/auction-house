import React from "react";

class AuctionActiveDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const auction = this.props.auction;
        const item = this.props.items[auction.item_id.id];
        const user = this.props.users[auction.user_id];
        return (
            <div className="auction-detail" 
            onClick={this.props.handleAuctionClick.bind(this, this.props.auction)}>
                <ul>
                    <li><img src={item.image_url}/></li>
                    <li>{item.name}</li>
                    <li>{item.level}</li>
                    <li>{this.timeLeft()}</li>
                    <li>{user.username}</li>
                    <div className="auction-detail-bid">
                        <li>{auction.bid ? auction.bid.amount : 0}</li>
                        <li>{auction.buyout}</li>
                    </div>
                </ul>
            </div>
        )
    }

    timeLeft() {
        let mill = new Date(this.props.auction.end_time) - new Date();
        let sec = Math.floor(mill / 1000);
        let min = Math.floor(sec / 60);
        sec = sec % 60;
        let hour = Math.floor(min / 60);
        min = min % 60;
        return `${hour} hr ${min} min ${sec} sec`
    }
}

export default AuctionActiveDetail;