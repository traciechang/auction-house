import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchAuctions();
        this.props.fetchUser(this.props.currentUser.id);
    }

    render() {
        return (
            <div className="profile">
                <div class="row">
                    <h1 class="col-md-12">{this.props.currentUser.username}'s Profile</h1>
                </div>
        
                <div className="row sell-won">
                    <span class="col-md-3">
                        <div>Selling</div>
                        <div>{this.props.selling}</div>
                    </span>

                    <span class="col-md-3">
                        <div>Won</div>
                        <div>{this.props.won}</div>
                    </span>
                </div>

                <div class="row gold">
                    <span class="col-md-6">
                        <div>Gold</div>
                        <div>{this.props.currentUser.inventory.gold}</div>
                    </span>
                </div>
            </div>

        )
    }
}

export default Profile;