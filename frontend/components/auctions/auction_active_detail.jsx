import React from "react";

class AuctionActiveDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }

        this.tick = this.tick.bind(this);
    };

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const auction = this.props.auction;
        const item = this.props.items[auction.item_id.id];
   
        return (
            <div className="auction-detail" 
            onClick={this.props.handleAuctionClick.bind(this, this.props.auction)}>
                <ul>
                    <li><img src={item.image_url}/></li>
                    <li>{item.name}</li>
                    <li>{item.level}</li>
                    <li>{this.displayTime()}</li>
                    <li>{auction.user.username}</li>
                    <div className="auction-detail-bid">
                        <li>{auction.bid ? auction.bid.amount : 0}</li>
                        <li>{auction.buyout}</li>
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