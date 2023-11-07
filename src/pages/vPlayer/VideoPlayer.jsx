/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import screenfull from 'screenfull';
import ControlIcons from './playerComponents/ControlIcons';
import styles from './vPlayer.module.css';
import { SAFE_VOLUME_LEVEL } from '../../CONSTANTS';
import {
  changeMutingStatus,
  changePlayingStatus,
  setMutingStatus,
  changeVolumeLevel,
  setPlayedTime,
  setBackRate,
  setSeeking,
  setPlayedTimeFromObject,
} from '../../store/slices/playerSlice';
import secondsToRequiredFormat from '../../utils/secondsToRequiredFormat';

function VideoPlayer() {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const mute = useSelector((state) => state.player.mute);
  const volume = useSelector((state) => state.player.volume);
  const seeking = useSelector((state) => state.player.seeking);
  const played = useSelector((state) => state.player.played);
  const playerbackRate = useSelector((state) => state.player.playerBackRate);

  const playerRef = useRef(null);
  const playerDivRef = useRef(null);

  const currentPlayerTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : '00:00';

  const movieDuration = playerRef.current
    ? playerRef.current.getDuration()
    : '00:00';

  const playedTime = secondsToRequiredFormat(currentPlayerTime);
  const fullMovieTime = secondsToRequiredFormat(movieDuration);

  const handlePlayAndPauseChange = () => {
    dispatch(changePlayingStatus());
  };

  const handleVolumeChangeOrSeek = (e, newValue) => {
    dispatch(changeVolumeLevel(newValue));
    dispatch(setMutingStatus(newValue === 0));
  };

  const handleMutingUnmuting = () => {
    if (volume === 0) {
      dispatch(changeVolumeLevel(SAFE_VOLUME_LEVEL));
    }
    dispatch(changeMutingStatus());
  };

  const handleRewind = () => {
    playerRef.current.seekTo(
      playerRef.current.getCurrentTime() - 10,
      'seconds'
    );
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(
      playerRef.current.getCurrentTime() + 30,
      'seconds'
    );
  };

  const handlePlayerProgress = (state) => {
    if (!seeking) {
      dispatch(setPlayedTimeFromObject(state));
    }
  };

  const handlePlayerSeek = (e, newValue) => {
    dispatch(setPlayedTime(parseFloat(newValue / 100)));
    playerRef.current.seekTo(played, 'fraction');
  };

  const handlePlayerMouseSeekUp = () => {
    dispatch(setSeeking(false));
    playerRef.current.seekTo(played);
  };

  const handlePlayerRate = (rate) => {
    dispatch(setBackRate(rate));
  };

  const handleFullScreenMode = () => {
    screenfull.toggle(playerDivRef.current);
  };

  return (
    <>
      <header className={styles.headerSection}>
        <p className={styles.headerText}>Movie-seeker Video Player</p>
      </header>
      <Container maxWidth='md'>
        <div className={styles.playerDiv} ref={playerDivRef}>
          <ReactPlayer
            width='100%'
            height='100%'
            url='https://www.youtube.com/watch?v=Z8qU0GdW88Q'
            ref={playerRef}
            playing={isPlaying}
            volume={volume}
            muted={mute}
            onProgress={handlePlayerProgress}
            playbackRate={playerbackRate}
          />
        </div>
        <ControlIcons
          playAndPauseChange={handlePlayAndPauseChange}
          isPlaying={isPlaying}
          rewind={handleRewind}
          fastForward={handleFastForward}
          played={played}
          onSeek={handlePlayerSeek}
          onSeekMouseUp={handlePlayerMouseSeekUp}
          playTime={playedTime}
          fullMovieTime={fullMovieTime}
          muting={handleMutingUnmuting}
          muted={mute}
          volume={volume}
          volumeChange={handleVolumeChangeOrSeek}
          volumeSeek={handleVolumeChangeOrSeek}
          playerbackRate={playerbackRate}
          playRate={handlePlayerRate}
          fullScreenMode={handleFullScreenMode}
        />
      </Container>
    </>
  );
}

export default VideoPlayer;
