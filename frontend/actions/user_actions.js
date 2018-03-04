import * as UserAPIUtil from "../util/user_api_util";
import { receiveCurrentUser } from "../actions/session_actions";

export const fetchUser = user => dispatch => (
    UserAPIUtil.fetchUser(user).then(response => {
        dispatch(receiveCurrentUser(response))
    })
);