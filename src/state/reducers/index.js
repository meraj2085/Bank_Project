import { combineReducers } from "redux";
import { balanceReducer } from "./balanceReducer";
import { depositReducer } from "./depositReducer";
import { withdrawReducer } from "./withdrawReducer";

export const reducers = combineReducers({
  balance: balanceReducer,
  deposit: depositReducer,
  withdraw: withdrawReducer,
});
