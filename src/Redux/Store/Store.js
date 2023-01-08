import { createStore ,applyMiddleware, compose} from "redux";
import reducer from "../Reducer/rootreducer";
import thunk from "redux-thunk";



const logger = (Store) => (next) => (action) => {
    console.log("dispatching: ", action);
    let result = next(action);
    console.log("next state: ", Store.getState());
    return result;
  };
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducer,  composeEnhancers(applyMiddleware(thunk, logger)));

export default store;