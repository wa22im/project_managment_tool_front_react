import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./redux/reducer/index";

const initaState = {};
const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes("Chrome")) {



  
  const Enhancer =     compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  store = createStore(
    rootReducer,
    initaState,
    Enhancer
    

  );
} else {
  store = createStore(
    rootReducer,
    initaState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
