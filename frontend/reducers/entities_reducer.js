import { combineReducers } from "redux";
import { auctionsReducer } from "./auctions_reducer";
import itemsReducer from "./items_reducer";
import usersReducer from "./users_reducer";

export const entitiesReducer = combineReducers({
    auctions: auctionsReducer,
    items: itemsReducer,
    users: usersReducer
});