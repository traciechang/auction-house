import { combineReducers } from "redux";
import { auctionErrorsReducer } from "./auction_errors_reducer";
import { sessionErrorsReducer } from "./session_errors_reducer";

const errorsReducer = combineReducers({
    auction: auctionErrorsReducer,
    session: sessionErrorsReducer
});

export default errorsReducer;