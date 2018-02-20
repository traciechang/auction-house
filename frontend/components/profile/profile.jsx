import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchMyAuctions();
    }

    render() {
        console.log("in profile")
        // console.log(this.props.items)
        return (
            <div className="profile">
                <h1>{this.props.currentUser.username}'s Profile</h1>
        
                <div className="sell-won">
                    <span>Selling {this.props.selling}</span>
                    <span>Won 0</span>
                </div>
                <span>Gold {this.props.currentUser.inventory.gold}</span>
            </div>

        )
    }
}

export default Profile;