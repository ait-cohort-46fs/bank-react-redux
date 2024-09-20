
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { accountReducer } from "../reducer/accountReducer";

const initialState = {
    balance: 0,
    quote: 'Winter is coming'
}

export const store = createStore(accountReducer, initialState, applyMiddleware(thunk, logger));