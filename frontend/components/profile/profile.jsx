import React from "react";

const Profile = ({ currentUser }) => (
    <div className="profile">
        <h1>{currentUser.username}'s Profile</h1>

        <div className="sell-won">
            <span>Selling 0</span>
            <span>Won 0</span>
        </div>
        <span>Gold {currentUser.inventory.gold}</span>
    </div>
)

export default Profile;