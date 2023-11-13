import React from 'react';
import { useParams } from 'react-router-dom';
import style from './SearchPage.module.scss';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useGetMovieByNameQuery } from '../../store/api/movieApi';

function SearchPage() {
    const filmName = useParams().query;
    const { data, isLoading, error } = useGetMovieByNameQuery(filmName);
    return (
        <div>
            <div className={style.name}>{filmName}</div>
            <div className={style.searchPage}>
                {isLoading && <div className={style.movie}>Loading...</div>}
                {error && (
                    <div className={style.movie}>Something error. Oops.</div>
                )}
                {data &&
                    data.map((film) => (
                        <MovieCard key={film.id} movieId={film.id} />
                    ))}
            </div>
        </div>
    );
}

export default SearchPage;
