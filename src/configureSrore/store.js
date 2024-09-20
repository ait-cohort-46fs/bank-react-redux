
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import {accountReducer} from "../reducer/accountReducer";
import { loggerEnhancer } from "../enhancers/loggerEnhancer";
import { thunkEnhancer } from "../enhancers/thunkEnhancer";

const initialState = {
    balance: 0,
    quote: 'Winter is coming'
}

export const store = createStore(accountReducer, initialState, applyMiddleware(thunkEnhancer, loggerEnhancer));