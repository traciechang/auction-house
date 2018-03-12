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
            <div className="container-fluid profile">
                <div class="row">
                    <h1 class="col-md-12">{this.props.currentUser.username}'s Profile</h1>
                </div>
        
                <div class="dashboard">
                    <div class="row">
                    <div className="col-md-6 sell-won">
                        <span class="sell-won-span">
                            <div>Selling</div>
                            <div>{this.props.selling}</div>
                        </span>

                        <span class="sell-won-span">
                            <div>Won</div>
                            <div>{this.props.won}</div>
                        </span>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6 gold">
                        <span class="gold-span">
                            <div>Gold</div>
                            <div>{this.props.currentUser.inventory.gold}</div>
                        </span>
                    </div>
                    </div>
                </div>
                
            </div>

        )
    }
}

export default Profile;