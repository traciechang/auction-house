import { RECEIVE_AUCTIONS } from "../actions/auction_actions";

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_AUCTIONS:
            let items = {};
            
            Object.keys(action.auctions).forEach(key => {
                items[action.auctions[key].item.id] = action.auctions[key].item
            });

            return items;
        default:
            return state;
    }
}

export default itemsReducer;