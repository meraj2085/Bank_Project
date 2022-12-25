import { combineReducers } from "redux";
import { balanceReducer } from "./balanceReducer";

export const reducers = combineReducers({ balance: balanceReducer });
