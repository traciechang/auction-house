import React from "react";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";
import NavigationBarContainer from "./navigation_bar/navigation_bar_container";
import BrowseContainer from "./browse/browse_container";
import ProfileContainer from "./profile/profile_container";
import AuctionFormContainer from "./auction_form/auction_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <NavigationBarContainer />
        </header>
        
        <Switch>
            <AuthRoute path="/signup" component={SessionFormContainer} />
            <AuthRoute path="/login" component={SessionFormContainer} />
            <ProtectedRoute path="/profile" component={ProfileContainer} />
            <ProtectedRoute path="/sell" component={AuctionFormContainer} />
            <Route path="/" component={BrowseContainer}/>
        </Switch>
    </div>
);

export default App;