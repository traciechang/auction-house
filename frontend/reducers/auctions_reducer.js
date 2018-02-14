import merge from "lodash/merge";
import omit from "lodash/omit";
import { RECEIVE_AUCTION, RECEIVE_AUCTIONS } from "../actions/auction_actions";

export const auctionsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        // need or no?
        case RECEIVE_AUCTION:
            return merge({}, state, {[action.auction.id]: omit(action.auction, ['item', 'user'])})
        case RECEIVE_AUCTIONS:
            let allAuctions = {};

            Object.keys(action.auctions).forEach(key => {
                allAuctions[key] = omit(action.auctions[key], ['item', 'user'])
            })

            return allAuctions;
        default:
            return state;
    }
};