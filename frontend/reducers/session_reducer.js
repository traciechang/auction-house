import omit from "lodash/omit";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import merge from "lodash/merge";

const defaultState = {
    currentUser: null
}

export const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            if (action.currentUser) {
                return merge({}, {currentUser: omit(action.currentUser, ['items'])});
            } else {
                return {currentUser: action.currentUser};
            };
        default:
            return state;
    }
}