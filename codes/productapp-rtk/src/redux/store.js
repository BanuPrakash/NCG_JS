import {configureStore} from '@reduxjs/toolkit'
import { cartReducer } from './features/CartSlice';
import {profileReducer} from './features/ProfileSlice';
import { productReducer } from './features/ProductSlice';

// configureStore instead of createStore
// configureStore(rootReducer)

const store = configureStore({
    reducer: {
        cart: cartReducer,
        profile: profileReducer,
        products: productReducer
    }
});

export default store;