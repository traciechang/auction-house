import { combineReducers } from "redux";
import { auctionsReducer } from "./auctions_reducer";

export const entitiesReducer = combineReducers({
    auctions: auctionsReducer
});