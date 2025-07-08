import { compose, createStore } from "redux";
import rootReducer from './reducers'; // index.js

// Redux Devtools for Debugging
const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;