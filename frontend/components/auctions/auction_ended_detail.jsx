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
                <ul class="row">
                    <div class="col-xs-12 col-sm-7 col-md-4 item-div">
                        <li><img class="auction-detail-image" src={item.image_url} item-quality={item.quality}/></li>
                        <li class="text-light">{item.name}</li>
                    </div>

                    <li class="text-light col-lg-1 d-none d-lg-block level-li">{item.level}</li>
                    <li class="text-light col-md-3 d-none d-md-block time-li">{this.convertTime()}</li>
                    <li class="text-light col-lg-1 d-none d-lg-block user-li">{auction.bid ? auction.bid.username : "-"}</li>

                    <div className="col-sm-3 col-md-2 d-none d-sm-block bid-buyout">
                        <li class="text-light">{auction.bid ? auction.bid.amount : 0}</li>
                        <div class="buyout">
                            <li>Buyout Price</li>
                            <li>{auction.buyout}</li>
                        </div>
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