/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './MovieCard.module.css';
import { PLUG_IMAGE_MOVIE_CARD } from '../../CONSTANTS';
import fillHeart from '../../images/fill-heart.svg';
import heart from '../../images/heart.svg';
import { useGetMovieByIdQuery } from '../../store/api/movieApi';
import { IsAuthContext } from '../../store/IsAuthContext';
import ShowButtonFavourite from '../UI/ShowButtonFavourite';

function MovieCard({ movieId }) {
    const { data, isLoading, error } = useGetMovieByIdQuery(movieId);
    const { isAuth } = useContext(IsAuthContext);
    const fav = useSelector((state) => state.favourite.favourites);
    const isFavourite = fav.includes(movieId);
    let heartImage;

    if (isAuth) {
        if (!isFavourite) {
            heartImage = <img src={heart} alt='black heart' width={40} />;
        } else {
            heartImage = <img src={fillHeart} alt='red heart' width={40} />;
        }
    }

    if (error) {
        return <div className={style.smallCard}>Something error</div>;
    }
    if (isLoading) {
        return <div className={style.smallCard}>Loading...</div>;
    }
    return (
        <div className={style.smallCard}>
            <Link to={`/movie/${data.id}`}>
                <div className={style.rating}>
                    {data.rating.kp?.toFixed(2)} kp
                </div>
                <div className={style.heart}>{heartImage}</div>
                <div className={style.description}>
                    <div className={style.title}>{data.name}</div>
                    <div className={style.release}>
                        {data.year} {data.genres[0]?.name}
                    </div>
                </div>
                <img
                    className={style.poster}
                    src={
                        data.poster
                            ? data.poster.previewUrl
                            : PLUG_IMAGE_MOVIE_CARD
                    }
                    alt={data.name}
                />
            </Link>
            <ShowButtonFavourite filmId={data.id} />
        </div>
    );
}

export default MovieCard;
