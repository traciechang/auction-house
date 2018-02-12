import { combineReducers } from "redux";
import { auctionsReducer } from "./auctions_reducer";
import itemsReducer from "./items_reducer";

export const entitiesReducer = combineReducers({
    auctions: auctionsReducer,
    items: itemsReducer
});