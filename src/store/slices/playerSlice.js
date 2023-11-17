/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPlaying: true,
    mute: true,
    volume: 0.5,
    playerBackRate: 1.0,
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
        changeMutingStatus(state) {
            state.mute = !state.mute;
        },
        setMutingStatus(state, action) {
            state.mute = action.payload;
        },
        changeVolumeLevel(state, action) {
            state.volume = action.payload / 100;
        },
        setPlayedTimeFromObject(state, action) {
            state.played = action.payload.played;
        },
        setPlayedTime(state, action) {
            state.played = action.payload;
        },
        setSeeking(state, action) {
            state.seeking = action.payload;
        },
        setBackRate(state, action) {
            state.playerBackRate = action.payload;
        }

    },
});

export const {
    changePlayingStatus,
    changeMutingStatus,
    setMutingStatus,
    changeVolumeLevel,
    setPlayedTime,
    setPlayedTimeFromObject,
    setSeeking,
    setBackRate
} = playerSlice.actions;
export const player = playerSlice.reducer;
