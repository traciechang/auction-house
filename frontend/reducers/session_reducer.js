import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const defaultState = {
    currentUser: null
}

export const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            console.log("in session reducer")
            console.log(action.currentUser)
            return action.currentUser;
        default:
            return state;
    }
}