import React from "react";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";
import NavigationBarContainer from "./navigation_bar/navigation_bar_container";
import BrowseContainer from "./browse/browse_container";
import ProfileContainer from "./profile/profile_container";

const App = () => (
    <div>
        <header>
            <NavigationBarContainer />
        </header>
        {/* <h1>Remote Auction House</h1> */}
        <Switch>
            <Route path="/signup" component={SessionFormContainer} />
            <Route path="/login" component={SessionFormContainer} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/" component={BrowseContainer}/>
        </Switch>
    </div>
);

export default App;