import React from 'react';
import ReactDom from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";
import omit from "lodash/omit";

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: { items: window.currentUser.items },
            session: { currentUser: omit(window.currentUser, ['items']) }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDom.render(<Root store={store}/>, document.getElementById('root'));
});