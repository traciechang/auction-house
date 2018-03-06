import * as UserAPIUtil from "../util/user_api_util";
import { receiveCurrentUser } from "../actions/session_actions";

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId).then(response => {
        dispatch(receiveCurrentUser(response))
    })
);