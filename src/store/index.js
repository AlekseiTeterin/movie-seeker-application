import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './api/movieApi';
import localStorageMiddleware from './localStorageMiddleware';
import { currentUser } from './slices/currentUserSlice';
import { favourite } from './slices/favouriteSlice';
import { history } from './slices/historySlice';
import { player } from './slices/playerSlice';

const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        currentUser,
        favourite,
        history,
        player,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware, localStorageMiddleware),
});

export default store;
