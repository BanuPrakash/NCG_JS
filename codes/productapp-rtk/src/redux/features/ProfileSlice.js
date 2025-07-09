import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  avatar: 'mypic.png',
  name: 'Banu Prakash'
}

const profileSlice = createSlice({
    name : 'profile',
    initialState,
    reducers: {
    }
});

export const profileReducer = profileSlice.reducer;