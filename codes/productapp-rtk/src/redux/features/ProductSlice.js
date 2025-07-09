import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../async/productsApi';


const initialState = {
    list: [],
    error: '',
    status: 'idle'
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // actions dispatched programatically
    },
    // actions sent by Thunk
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading";
            state.error = '';
            state.list = [];
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "idle";
            state.error = '';
            state.list.push(...action.payload);
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "idle";
            state.error = action.error.message;
            state.list = []
        });
    },
});

// export const { addToCart, increment, decrement, clearCart } = cartSlice.actions
export const productReducer = productSlice.reducer;