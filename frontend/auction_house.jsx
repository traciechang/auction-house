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
    const store = configureStore();

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END

    ReactDom.render(<Root store={store}/>, document.getElementById('root'));
});