import merge from "lodash/merge";
import { RECEIVE_AUCTION, RECEIVE_AUCTIONS } from "../actions/auction_actions";

export const auctionsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_AUCTION:
            return merge({}, state, action.auction)
        case RECEIVE_AUCTIONS:
            return action.auctions;
        default:
            return state;
    }
};