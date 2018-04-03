import React from "react";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.props.logout.bind(this);
    }

    buttonDisplay() {
        if (this.props.loggedIn) {
            return (
                <li className="ml-auto nav-bar-welcome-button">
                    <span class="text-light">Welcome, {this.props.currentUser.username}!</span>
                    <button class="btn btn-outline-light" onClick={this.logout} data-toggle="collapse" data-target="#navbarSupportedContent">Log Out</button>
                </li>
            )
        } else {
            return (
                <li class="ml-auto" data-toggle="collapse" data-target="#navbarSupportedContent"><Link class="text-light" to="/login">Log In</Link></li>
            )
        }
    }

    render() {
        return (
            <div class="navbar navbar-expand-lg navbar-dark bg-dark">
                <span class="navbar-brand">
                    <img src="http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518216515/Logos/wow_high_rez_icon_by_jocpoc-d39jgl5.png" className="nav-bar-logo"/>
                    <span>Remote Auction House</span>
                </span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav d-flex">
                        <li class="p-2"><Link class="text-light" to="/">Browse</Link></li>
                        <li class="p-2"><Link class="text-light" to="sell">Sell</Link></li>
                        <li class="p-2" data-toggle="collapse" data-target="#navbarSupportedContent"><Link class="text-light" to="bids">My Bids</Link></li>
                        <li class="p-2" data-toggle="collapse" data-target="#navbarSupportedContent"><Link class="text-light" to="auctions">My Auctions</Link></li>
                        <li class="p-2" data-toggle="collapse" data-target="#navbarSupportedContent"><Link class="text-light" to="profile">Profile</Link></li>

                        {this.buttonDisplay()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavigationBar;