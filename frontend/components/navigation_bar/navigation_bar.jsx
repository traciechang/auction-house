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
                <div>
                    <span>Welcome, {this.props.currentUser.username}</span>
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
            <div>
                <ul>
                    <li><Link to="/">Browse</Link></li>
                    <li><Link to="#">Sell</Link></li>
                    <li><Link to="#">My Bids</Link></li>
                    <li><Link to="#">My Auctions</Link></li>
                    <li><Link to="profile">Profile</Link></li>
                </ul>

                {this.buttonDisplay()}
            </div>
        )
    }
}

export default NavigationBar;