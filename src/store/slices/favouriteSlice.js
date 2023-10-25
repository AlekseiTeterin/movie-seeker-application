/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favourites: [],
};

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        setFavourite(state, action) {
            state.favourites = action.payload;
        },
        removeFavourite(state) {
            state.favourites = [];
        },
        addToFavourite(state, action) {
            state.favourites.push(action.payload);
        },
        deleteFromFavourite(state, action) {
            state.favourites = state.favourites.filter(
                (id) => id !== action.payload
            );
        },
    },
});

export const {
    setFavourite,
    removeFavourite,
    addToFavourite,
    deleteFromFavourite,
} = favouriteSlice.actions;
export const favourite = favouriteSlice.reducer;
