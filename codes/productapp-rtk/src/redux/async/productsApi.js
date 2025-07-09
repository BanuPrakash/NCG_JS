import { createAsyncThunk } from '@reduxjs/toolkit'


// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async () => {
        const response = await fetch('http://localhost:1234/products');
        const data = await response.json();
        return data
    },
);


/*

    when dispatch(fetchProducts()); // dispatch a Thunk
    triggers async() function ==> fetchProducts.pending action ==> taken by RTK 
    if function completes successfully => fetchProducts.fulfilled
    if any exception ==> fetchProducts.rejected
*/