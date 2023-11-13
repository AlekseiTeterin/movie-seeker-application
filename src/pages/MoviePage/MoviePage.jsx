import React from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './MoviePage.module.scss';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import ShowButtonFavourite from '../../components/UI/ShowButtonFavourite';
import { PLUG_IMAGE_MOVIE_CARD } from '../../CONSTANTS';
import { useGetMovieByIdQuery } from '../../store/api/movieApi';

function MoviePage() {
    const params = useParams();
    const movieId = params.id;
    const { data, isLoading } = useGetMovieByIdQuery(movieId);

    if (isLoading) {
        return <div className={style.movie}>Loading...</div>;
    }
    return (
        <ErrorBoundary>
            <div className={style.movie}>
                <div className={style.image}>
                    <img
                        className={style.poster}
                        src={
                            data.poster
                                ? data.poster.url
                                : PLUG_IMAGE_MOVIE_CARD
                        }
                        alt={data.name}
                        height='100%'
                    />
                </div>
                <div className={style.description}>
                    <div className={style.name}>{data.name}</div>
                    <div className={style.andButton}>
                        <div className={style.list}>
                            <div className={style.tabex}>Жанр:</div>
                            <div>
                                {data.genres.map((genre) => (
                                    <div key={data.genres.indexOf(genre)}>
                                        {' '}
                                        {genre.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.btn}>
                            <ShowButtonFavourite filmId={Number(movieId)} />
                        </div>
                    </div>

                    <div>Описание: {data.description}</div>
                    <div>Год выхода картины: {data.year}</div>
                    <div>
                        Рейтинг: Кинопоиск - {data.rating.kp}, IMDB -{' '}
                        {data.rating.imdb}, FilmCritics -{' '}
                        {data.rating.filmCritics}
                    </div>
                    <div className={style.list}>
                        <div className={style.tabex}>В ролях: </div>
                        <div>
                            {data.persons.slice(0, 5).map((actor) => (
                                <div key={actor.id}> {actor?.name}</div>
                            ))}
                        </div>
                    </div>

                    <div>
                        {data.videos !== undefined &&
                            data.videos.trailers[0] !== undefined && (
                                <Link
                                    to={data.videos?.trailers[0]?.url}
                                    className={style.link}
                                >
                                    Смотреть трейлер
                                </Link>
                            )}
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default MoviePage;
