import React from "react";
import AuctionActiveIndex from "./auction_active_index";
import AuctionEndedIndex from "./auction_ended_index";

class MyAuctions extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.fetchMyAuctions();
    }

    handleAuctionClick() {

    }

    render() {
        return (
            <div class="my-auctions">
                <div class="container-fluid">
                <div class="row">
                    <h1 class="col-md-12 text-center">My Auctions</h1>
                </div>
                </div>

                <div class="container-fluid">
                    <div class="row">
                        <h3 class="col-md-12 text-light">Active Auctions</h3>
                        <div class="col-md-12">
                            <AuctionActiveIndex auctions={this.props.activeAuctions} handleAuctionClick={this.handleAuctionClick}/>
                        </div>
                    </div>

                    <div class="row">
                        <h3 class="col-md-12 text-light">Ended Auctions</h3>
                        <div class="col-md-12">
                            <AuctionEndedIndex auctions={this.props.endedAuctions}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAuctions;