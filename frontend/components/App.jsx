import React from "react";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";

const App = () => (
    <div>
        {/* <h1>Remote Auction House</h1> */}
        <Switch>
            <Route path="/signup" component={SessionFormContainer} />
            <Route path="/" component={SessionFormContainer}/>
        </Switch>
    </div>
);

export default App;