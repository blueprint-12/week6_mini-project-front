import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import user from "./modules/user";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ user });
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
