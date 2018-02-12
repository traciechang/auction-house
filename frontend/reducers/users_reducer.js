import { RECEIVE_AUCTIONS } from "../actions/auction_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_AUCTIONS:
            let users = {};

            Object.keys(action.auctions).forEach(key => {
                users[action.auctions[key].user.id] = action.auctions[key].user
            });
            return users;
        default:
            return state;
    }
};

export default usersReducer;

