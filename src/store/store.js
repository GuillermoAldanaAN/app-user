import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

const initialState = {};

const store = createStore(
  reducers, // todos los reducers
  initialState, // Estado inicial
  applyMiddleware(reduxThunk)
);

export default store;
