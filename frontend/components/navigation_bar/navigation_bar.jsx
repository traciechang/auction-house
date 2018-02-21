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
                <div className="nav-bar-welcome-button">
                    <span>Welcome, {this.props.currentUser.username}!</span>
                    <button onClick={this.logout}>Log Out</button>
                </div>
            )
        } else {
            return (
                <Link to="/login">Log In</Link>
            )
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <ul className="nav-bar-list">
                    <li><img src="http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518216515/Logos/wow_high_rez_icon_by_jocpoc-d39jgl5.png" className="nav-bar-logo"/></li>
                    <li><Link to="/">Browse</Link></li>
                    <li><Link to="sell">Sell</Link></li>
                    <li><Link to="bids">My Bids</Link></li>
                    <li><Link to="auctions">My Auctions</Link></li>
                    <li><Link to="profile">Profile</Link></li>
                </ul>

                {this.buttonDisplay()}
            </div>
        )
    }
}

export default NavigationBar;