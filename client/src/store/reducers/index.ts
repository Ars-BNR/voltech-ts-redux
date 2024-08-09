import { combineReducers } from "redux";
import Authreducer from "./auth";

export const rootReducer = combineReducers({
  auth: Authreducer,
});

export type RootState = ReturnType<typeof rootReducer>;
