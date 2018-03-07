import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchAuctions();
        this.props.fetchUser(this.props.currentUser.id);
    }

    // componentDidMount() {
    //     this.props.fetchAuctions();
    //     this.props.fetchUser(this.props.currentUser.id);
    // }

    render() {
        return (
            <div className="profile">
                <h1>{this.props.currentUser.username}'s Profile</h1>
        
                <div className="sell-won">
                    <span>Selling {this.props.selling}</span>
                    <span>Won {this.props.won}</span>
                </div>
                <span>Gold {this.props.currentUser.inventory.gold}</span>
            </div>

        )
    }
}

export default Profile;