/* eslint-disable react/prop-types */
import React from 'react';
import {
  FastRewind,
  FastForwardSharp,
  PlayArrowSharp,
  PauseSharp,
  VolumeUp,
  VolumeOff,
  Fullscreen,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import styles from './ControlIcons.module.css';
import { PLAYER_SPEED_RATE_VALUES_ARRAY } from '../../../CONSTANTS';

const PrettoSlider = styled(Slider)({
  height: 5,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

function ControlIcons({
  playAndPauseChange,
  isPlaying,
  rewind,
  fastForward,
  played,
  onSeek,
  onSeekMouseUp,
  playTime,
  fullMovieTime,
  muting,
  muted,
  volume,
  volumeChange,
  volumeSeek,
  playerbackRate,
  playRate,
  fullScreenMode,
  movieName,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  console.log('name: ', movieName);
  const handlePopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'playbackrate-popover' : undefined;

  return (
    <div className={styles.controlsDiv}>
      <div className={styles.playGroop}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <IconButton
            className={styles.controlsIcons}
            aria-label='reqind'
            onClick={rewind}
          >
            <FastRewind fontSize='large' style={{ color: 'white' }} />
          </IconButton>

          <IconButton
            className={styles.controlsIcons}
            aria-label='reqind'
            onClick={playAndPauseChange}
          >
            {isPlaying ? (
              <PauseSharp fontSize='large' style={{ color: 'white' }} />
            ) : (
              <PlayArrowSharp fontSize='large' style={{ color: 'white' }} />
            )}
          </IconButton>

          <IconButton
            className={styles.controlsIcons}
            aria-label='reqind'
            onClick={fastForward}
          >
            <FastForwardSharp fontSize='large' style={{ color: 'white' }} />
          </IconButton>
        </Grid>
      </div>

      <div className={styles.bottomGroop}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          style={{ padding: 16 }}
        >
          <Grid item>
            <Typography variant='h5' style={{ color: 'white' }}>
              {movieName}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <PrettoSlider
              min={0}
              max={100}
              value={played * 100}
              onChange={onSeek}
              onChangeCommitted={onSeekMouseUp}
            />
            <Grid container direction='row' justifyContent='space-between'>
              <Typography variant='h7' style={{ color: 'white' }}>
                {playTime}
              </Typography>
              <Typography variant='h7' style={{ color: 'white' }}>
                {fullMovieTime}
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container alignItems='center' direction='row'>
              <IconButton
                className={styles.controlsIcons}
                onClick={playAndPauseChange}
                aria-label='reqind'
              >
                {isPlaying ? (
                  <PauseSharp fontSize='large' style={{ color: 'white' }} />
                ) : (
                  <PlayArrowSharp fontSize='large' style={{ color: 'white' }} />
                )}
              </IconButton>

              <IconButton
                className={styles.controlsIcons}
                onClick={muting}
                aria-label='reqind'
              >
                {muted ? (
                  <VolumeOff fontSize='large' style={{ color: 'white' }} />
                ) : (
                  <VolumeUp fontSize='large' style={{ color: 'white' }} />
                )}
              </IconButton>

              <Typography style={{ color: '#fff', paddingTop: '5px' }}>
                {Math.round(volume * 100)}
              </Typography>
              <Slider
                min={0}
                max={100}
                defaultValue={100}
                className={styles.volumeSlider}
                onChange={volumeChange}
                onChangeCommitted={volumeSeek}
              />
            </Grid>
          </Grid>

          <Grid item>
            <Button
              variant='text'
              onClick={handlePopOver}
              className={styles.bottomIcons}
            >
              <Typography>{playerbackRate}X</Typography>
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <Grid container direction='column-reverse'>
                {PLAYER_SPEED_RATE_VALUES_ARRAY.map((rate) => (
                  <Button variant='text' onClick={() => playRate(rate)}>
                    <Typography
                      color={rate === playerbackRate ? 'secondary' : 'default'}
                    >
                      {rate}
                    </Typography>
                  </Button>
                ))}
              </Grid>
            </Popover>
            <IconButton className={styles.bottomIcons} onClick={fullScreenMode}>
              <Fullscreen fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ControlIcons;
