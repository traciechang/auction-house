import React from "react";

const Profile = ({currentUser}) => (
    <div>
        <h1>{currentUser.username}'s Profile</h1>
        <span>Selling               #0</span>
        <span>Won               #0</span>
        <span>Gold               #0</span>
    </div>
)

export default Profile;