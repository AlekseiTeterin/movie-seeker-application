/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    history: [],
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setHistory(state, action) {
            state.history = action.payload;
        },
        removeHistory(state) {
            state.history = [];
        },
        addToHistory(state, action) {
            state.history.push(action.payload);
        },
    },
});

export const { setHistory, removeHistory, addToHistory } = historySlice.actions;
export const history = historySlice.reducer;
