import React from "react";
import ActionCable from "actioncable";

class AuctionActiveDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
        }

        this.tick = this.tick.bind(this);
        this.handleReceiveNewBid = this.handleReceiveNewBid.bind(this);
        this.displayBuyout = this.displayBuyout.bind(this);
    };

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);

        this.sub = App.cable.subscriptions.create('AuctionChannel', {
            received: this.handleReceiveNewBid
        })
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    displayBuyout() {
        if (this.props.auction && this.props.auction.buyout) {
            return <li>{this.props.auction.buyout.toLocaleString()}</li>
        } else {
            return <li>&nbsp; -- </li>
        }
    }

    handleReceiveNewBid(bid) {
        if (bid.end_time) {
            console.log("it's hitting it!!")
            console.log(bid.end_time)
            if ((bid.id === this.props.auction.id) && (new Date(bid.end_time) < new Date())) {
                this.props.fetchAuction(bid.id)
            }
        }
        else if (bid.auction_id === this.props.auction.id) {
            this.props.fetchAuction(bid.auction_id)
        }
    };

    render() {
        const auction = this.props.auction;
        const item = this.props.items[auction.item_id.id];
        let bid_amount;
        
        if (auction.bid) {
            bid_amount = auction.bid.amount
        } else if (auction.starting_bid) {
            bid_amount = auction.starting_bid
        } else {
            bid_amount = 0
        };

        return (
            <div className="auction-detail" 
            onClick={this.props.handleAuctionClick.bind(this, this.props.auction)} selected-auction={this.props.selectedAuction}>
                <ul class="row">
                    <div className="col-xs-12 col-sm-7 col-md-4 item-div">
                        <li><img className="auction-detail-image" src={item.image_url} item-quality={item.quality}/></li>
                        <li class="text-light">{item.name}</li>
                    </div>

                    <li class="text-light col-lg-1 d-none d-lg-block level-li">{item.level}</li>
                    <li class="text-light col-md-3 d-none d-md-block time-li">{this.displayTime()}</li>
                    <li class="text-light col-lg-1 d-none d-lg-block user-li">{auction.user.username}</li>

                    <div className="col-sm-3 col-md-2 d-none d-sm-block bid-buyout">
                        <li class="text-light">{bid_amount.toLocaleString()}</li>
                        <div className="buyout">
                            <li>Buyout</li>
                            {this.displayBuyout()}
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