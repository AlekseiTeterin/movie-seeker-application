/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import screenfull from 'screenfull';
import ControlIcons from './playerComponents/ControlIcons';
import styles from './vPlayer.module.css';
import { changePlayingStatus } from '../../store/slices/playerSlice';
import secondsToRequiredFormat from '../../utils/secondsToRequiredFormat';

function VideoPlayer() {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);

  const [playerState, setPlayerState] = useState({
    mute: true,
    volume: 0.5,
    playerbackRate: 1.0,
    played: 0,
    seeking: false,
  });
  const playerRef = useRef(null);
  const playerDivRef = useRef(null);

  const { mute, volume, playerbackRate, played } = playerState;

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
    if (!playerState.seeking) {
      setPlayerState({ ...playerState, ...state });
    }
  };

  const handlePlayerSeek = (e, newValue) => {
    console.log('this one', parseFloat(newValue));
    setPlayerState({ ...playerState, played: parseFloat(newValue / 100) });
    playerRef.current.seekTo(played, 'fraction');
  };

  const handlePlayerMouseSeekUp = () => {
    setPlayerState({ ...playerState, seeking: false });
    playerRef.current.seekTo(played);
  };

  const handleMuting = () => {
    setPlayerState({ ...playerState, mute: !playerState.mute });
  };

  // function for the `onChange` event
  const handleVolumeChange = (e, newValue) => {
    setPlayerState({
      ...playerState,
      volume: newValue / 100,
      mute: newValue === 0,
    });
  };

  // function for the `onChangeCommitted` event
  const handleVolumeSeek = (e, newValue) => {
    setPlayerState({
      ...playerState,
      volume: newValue / 100,
      mute: newValue === 0,
    });
  };

  const handlePlayerRate = (rate) => {
    setPlayerState({ ...playerState, playerbackRate: rate });
  };

  const handleFullScreenMode = () => {
    screenfull.toggle(playerDivRef.current);
  };

  // const [playerState, setPlayerState] = useState({
  //   isPlaying: true,
  //   mute: true,
  //   volume: 0.5,
  //   playerbackRate: 1.0,
  //   played: 0,
  //   seeking: false,
  // });
  // const playerRef = useRef(null);
  // const playerDivRef = useRef(null);

  // const { isPlaying, mute, volume, playerbackRate, played } = playerState;

  // const currentPlayerTime = playerRef.current
  //   ? playerRef.current.getCurrentTime()
  //   : '00:00';
  // const movieDuration = playerRef.current
  //   ? playerRef.current.getDuration()
  //   : '00:00';
  // const playedTime = secondsToRequiredFormat(currentPlayerTime);
  // const fullMovieTime = secondsToRequiredFormat(movieDuration);

  // const handlePlayAndPauseChange = () => {
  //   setPlayerState({
  //     ...playerState,
  //     isPlaying: !playerState.isPlaying,
  //   });
  // };

  // const handleRewind = () => {
  //   playerRef.current.seekTo(
  //     playerRef.current.getCurrentTime() - 10,
  //     'seconds'
  //   );
  // };

  // const handleFastForward = () => {
  //   playerRef.current.seekTo(
  //     playerRef.current.getCurrentTime() + 30,
  //     'seconds'
  //   );
  // };

  // const handlePlayerProgress = (state) => {
  //   if (!playerState.seeking) {
  //     setPlayerState({ ...playerState, ...state });
  //   }
  // };

  // const handlePlayerSeek = (newValue) => {
  //   setPlayerState({ ...playerState, played: parseFloat(newValue / 100) });
  //   playerRef.current.seekTo(parseFloat(newValue / 100));
  // };

  // const handlePlayerMouseSeekUp = (newValue) => {
  //   setPlayerState({ ...playerState, seeking: false });
  //   playerRef.current.seekTo(newValue / 100);
  // };

  // const handleMuting = () => {
  //   setPlayerState({ ...playerState, muted: !playerState.muted });
  // };

  // // function for the `onChange` event
  // const handleVolumeChange = (e, newValue) => {
  //   setPlayerState({
  //     ...playerState,
  //     volume: parseFloat(newValue / 100),
  //     mute: newValue === 0,
  //   });
  // };

  // // function for the `onChangeCommitted` event
  // const handleVolumeSeek = (e, newValue) => {
  //   setPlayerState({
  //     ...playerState,
  //     volume: parseFloat(newValue / 100),
  //     mute: newValue === 0,
  //   });
  // };

  // const handlePlayerRate = (rate) => {
  //   setPlayerState({ ...playerState, playerbackRate: rate });
  // };

  // const handleFullScreenMode = () => {
  //   screenfull.toggle(playerDivRef.current);
  // };

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
            url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
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
          muting={handleMuting}
          muted={mute}
          volume={volume}
          volumeChange={handleVolumeChange}
          volumeSeek={handleVolumeSeek}
          playerbackRate={playerbackRate}
          playRate={handlePlayerRate}
          fullScreenMode={handleFullScreenMode}
        />
      </Container>
    </>
  );
}

export default VideoPlayer;
