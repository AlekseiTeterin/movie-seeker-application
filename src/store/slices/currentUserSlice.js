/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    userPassword: '',
};

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.userName = action.payload.userName;
            state.userPassword = action.payload.userPassword;
        },
        removeCurrentUser(state) {
            state.userName = '';
            state.userPassword = '';
        },
    },
});

export const { setCurrentUser, removeCurrentUser } = currentUserSlice.actions;
export const currentUser = currentUserSlice.reducer;
