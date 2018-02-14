import merge from "lodash/merge";
import { RECEIVE_AUCTION, RECEIVE_AUCTIONS } from "../actions/auction_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_AUCTION:
            return merge({}, state, action.auction.item);
        case RECEIVE_AUCTIONS:
            let items = {};
            
            Object.keys(action.auctions).forEach(key => {
                items[action.auctions[key].item.id] = action.auctions[key].item
            });
            
            return merge({}, state, items);
        case RECEIVE_CURRENT_USER:
            if (action.currentUser) {
                let userItems = {};
    
                Object.keys(action.currentUser.items).forEach(key => {
                    userItems[key] = action.currentUser.items[key]
                });
    
                return merge({}, state, userItems);
            }
        default:
            return state;
    }
}

export default itemsReducer;