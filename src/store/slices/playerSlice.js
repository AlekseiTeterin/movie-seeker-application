/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPlaying: true,
    mute: true,
    volume: 0.5,
    playerbackRate: 1.0,
    played: 0,
    seeking: false,
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        changePlayingStatus(state) {
            state.isPlaying = !state.isPlaying;
        },
    },
});

export const { changePlayingStatus } = playerSlice.actions;
export const player = playerSlice.reducer;
