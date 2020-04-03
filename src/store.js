import { createStore, applyMiddleware, compose } from "redux";

import thunk from "react-thunk";
import rootReducer from "./redux/reducer/index";

const initaState = {};
const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes("Chrome")) {
  store = createStore(
    rootReducer,
    initaState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducer,
    initaState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
