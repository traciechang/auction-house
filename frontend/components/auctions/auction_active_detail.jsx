import React from "react";
import ActionCable from "actioncable";

class AuctionActiveDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
            bid: this.props.auction.bid ? this.props.auction.bid.amount : 0
        }

        this.tick = this.tick.bind(this);
        this.handleReceiveNewBid = this.handleReceiveNewBid.bind(this);
    };

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);

        const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
        this.sub = cable.subscriptions.create('AuctionChannel', {
            received: this.handleReceiveNewBid
        })
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    handleReceiveNewBid(bid) {
        if (bid.auction_id === this.props.auction.id) {
            this.setState({"bid": bid.amount})
        }
    };

    render() {
        const auction = this.props.auction;
        const item = this.props.items[auction.item_id.id];
   
        return (
            <div className="auction-detail" 
            onClick={this.props.handleAuctionClick.bind(this, this.props.auction)}>
                <ul>
                    <div className="item-div">
                        <li className="auction-detail-image"><img src={item.image_url}/></li>
                        <li>{item.name}</li>
                    </div>

                    <div className="level-time-user">
                        <li>{item.level}</li>
                        <li>{this.displayTime()}</li>
                        <li>{auction.user.username}</li>
                    </div>

                    <div className="bid-buyout">
                        <li>{this.state.bid}</li>
                        <div className="buyout">
                            <li>Buyout</li>
                            <li>{auction.buyout}</li>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }

    tick() {
        this.setState({time: new Date()})
    };

    displayTime() {
        let mill = new Date(this.props.auction.end_time) - this.state.time;

        let sec = Math.floor(mill / 1000);
        let min = Math.floor(sec / 60);
        sec = sec % 60;
        let hour = Math.floor(min / 60);
        min = min % 60;
        return `${hour} hr ${min} min ${sec} sec`
    }
}

export default AuctionActiveDetail;