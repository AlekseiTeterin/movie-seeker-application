/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './MovieCard.module.scss';
import { PLUG_IMAGE_MOVIE_CARD } from '../../CONSTANTS';
import fillHeart from '../../images/fill-heart.svg';
import heart from '../../images/heart.svg';
import { useGetMovieByIdQuery } from '../../store/api/movieApi';
import { IsAuthContext } from '../../store/IsAuthContext';
import {
  addToFavourite,
  deleteFromFavourite,
} from '../../store/slices/favouriteSlice';
import ShowButtonFavourite from '../UI/ShowButtonFavourite';

function MovieCard({ movieId }) {
  const { data, isLoading, error } = useGetMovieByIdQuery(movieId);
  const { isAuth } = useContext(IsAuthContext);
  const fav = useSelector((state) => state.favourite.favourites);
  const dispatch = useDispatch();
  const isFavourite = fav.includes(movieId);

  if (error) {
    return <div className={style.smallCard}>Something error</div>;
  }
  if (isLoading) {
    return <div className={style.smallCard}>Loading...</div>;
  }
  return (
    <div className={style.smallCard}>
      <Link to={`/movie/${data.id}`}>
        <div className={style.posterPlus}>
          <div className={style.ratingAndFavourite}>
            <div className={style.rating}>{data.rating.kp?.toFixed(2)} kp</div>
            <div
              className={style.heart}
              onKeyDown={() =>
                isAuth
                  ? dispatch(addToFavourite(data.id))
                  : dispatch(deleteFromFavourite(data.id))
              }
              key={data.id}
            >
              {isAuth &&
                (isFavourite ? (
                  <img src={fillHeart} alt='red heart' width={40} />
                ) : (
                  <img src={heart} alt='black heart' width={40} />
                ))}
            </div>
          </div>
          <img
            className={style.poster}
            src={data.poster ? data.poster.previewUrl : PLUG_IMAGE_MOVIE_CARD}
            alt={data.name}
          />
        </div>
        <div className={style.description}>
          <div className={style.title}>{data.name}</div>
          <div className={style.release}>
            {data.year} {data.genres[0]?.name}
          </div>
        </div>
      </Link>
      <ShowButtonFavourite filmId={data.id} />
    </div>
  );
}

export default MovieCard;
