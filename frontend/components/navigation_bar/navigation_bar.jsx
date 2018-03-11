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
                    <span class="text-light">Welcome, {this.props.currentUser.username}!</span>
                    <button class="btn btn-outline-light" onClick={this.logout}>Log Out</button>
                </div>
            )
        } else {
            return (
                <Link to="/login">Log In</Link>
            )
        }
    }

    render() {
        // return (
        //     <div className="nav-bar">
        //         <ul className="nav-bar-list">
        //             <li><img src="http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518216515/Logos/wow_high_rez_icon_by_jocpoc-d39jgl5.png" className="nav-bar-logo"/></li>
        //             <li><Link to="/">Browse</Link></li>
        //             <li><Link to="sell">Sell</Link></li>
        //             <li><Link to="bids">My Bids</Link></li>
        //             <li><Link to="auctions">My Auctions</Link></li>
        //             <li><Link to="profile">Profile</Link></li>
        //         </ul>

        //         {this.buttonDisplay()}
        //     </div>
        // )

        // 

        return (
            <div class="navbar navbar-expand-sm navbar-dark bg-dark">
                <span class="navbar-brand">
                    <img src="http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518216515/Logos/wow_high_rez_icon_by_jocpoc-d39jgl5.png" className="nav-bar-logo"/>
                </span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav">
                        <li><Link class="text-light" to="/">Browse</Link></li>
                        <li><Link class="text-light" to="sell">Sell</Link></li>
                        <li><Link class="text-light" to="bids">My Bids</Link></li>
                        <li><Link class="text-light" to="auctions">My Auctions</Link></li>
                        <li><Link class="text-light" to="profile">Profile</Link></li>
                    </ul>
                </div>
            </div>

            // <div className="navbar-collapse navbar-expand-md navbar-dark bg-dark">
            // {/* <div class="navbar"> */}
           
            //     {/* <ul class="nav-bar-list"> */}
            //     {/* <ul class="navbar-nav"> */}

            //     {this.buttonDisplay()}
               
            // </div>
        )
    }
}

export default NavigationBar;