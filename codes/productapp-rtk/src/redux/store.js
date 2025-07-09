import {configureStore} from '@reduxjs/toolkit'
import { cartReducer } from './features/CartSlice';
import {profileReducer} from './features/ProfileSlice';

// configureStore instead of createStore
// configureStore(rootReducer)

const store = configureStore({
    reducer: {
        cart: cartReducer,
        profile: profileReducer
    }
});

export default store;