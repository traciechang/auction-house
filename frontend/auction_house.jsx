import React from 'react';
import ReactDom from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

// TESTING START:
import { signup, login, logout } from "./util/session_api_util"

window.signup = signup
window.login = login;
window.logout = logout;
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
    let store;

    console.log("in auction_house.js")
    debugger;
        console.log(window.currentUser)
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        // why?
        // delete window.currentUser;
    } else {
        store = configureStore();
    }

    // for tsting
    window.getState = store.getState()

    ReactDom.render(<Root store={store}/>, document.getElementById('root'));
});