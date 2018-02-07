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

export const signup = (user) => dispatch => (
    SessionAPIUtil.signup(user).then((response) => (
        dispatch(receiveCurrentUser(response))
    ), responseError => (
        dispatch(receiveErrors(responseError.responseJSON))
    ))
);

export const login = (user) => dispatch => (
    SessionAPIUtil.login(user).then((response) => (
        dispatch(receiveCurrentUser(response))
    ), responseError => (
        dispatch(receiveErrors(responseError.responseJSON))
    ))
);

// export const login = (user) => dispatch => {
//     console.log("in session actions, login method")
//     console.log(user)
//     return (
//     SessionAPIUtil.login(user).then((response) => {
//         console.log("in session actions, login method, then")
//         console.log(response)
//         return (
//         dispatch(receiveCurrentUser(response))
//     )}, responseError => {
//         console.log("in session actions, login method, then error")
//         console.log(responseError.responseJSON)
//         return (
//         dispatch(receiveErrors(responseError))
//     )})
// )};

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then((response) => (
        dispatch(receiveCurrentUser(null))
    ))
);