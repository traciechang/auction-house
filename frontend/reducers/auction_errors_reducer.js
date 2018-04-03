import { RECEIVE_AUCTION, RECEIVE_AUCTION_ERRORS } from "../actions/auction_actions";

export const auctionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_AUCTION:
            return [];
        case RECEIVE_AUCTION_ERRORS:
            return action.errors;
        default:
            return state;
    }
}