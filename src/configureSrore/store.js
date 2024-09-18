import { createStore } from "../redux/createStore";
import {accountReducer} from "../reducer/accountReducer";

const initialState = {
    balance: 0
}

export const store = createStore(accountReducer, initialState);