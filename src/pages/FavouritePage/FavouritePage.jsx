import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import style from './FavouritePage.module.scss';
import MovieCard from '../../components/MovieCard/MovieCard';
import useFavourite from '../../hooks/useFavourite';
import { IsAuthContext } from '../../store/IsAuthContext';

function FavouritePage() {
    const favouriteArray = useFavourite();
    const { isAuth } = useContext(IsAuthContext);

    if (!isAuth) return <Navigate to='/signin' />;

    if (favouriteArray.length === 0) {
        return (
            <div className={style.favourite}>
                <h1>В избранном пока ничего нет</h1>
            </div>
        );
    }
    return (
        <div className={style.favourite}>
            <h1>Избранное:</h1>
            <div className={style.favList}>
                {favouriteArray.map((filmId) => (
                    <MovieCard key={filmId} movieId={filmId} />
                ))}
            </div>
        </div>
    );
}

export default FavouritePage;
