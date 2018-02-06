import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
    type: "RECEIVE_CURRENT_USER",
    currentUser
});

export const receiveErrors = (errors) => ({
    type: "RECEIVE_ERRORS",
    errors
});

// may need to change line 21
export const signup = (user) => dispatch => (
    SessionAPIUtil.signup(user).then((response) => (
        dispatch(receiveCurrentUser(response))
    ), responseError => (
        dispatch(receiveErrors(responseError))
    ))
);

// same here
export const login = (user) => dispatch => (
    SessionAPIUtil.login(user).then((response) => (
        dispatch(receiveCurrentUser(response))
    ), responseError => (
        dispatch(receiveErrors(responseError))
    ))
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then((response) => (
        dispatch(receiveCurrentUser(null))
    ))
);