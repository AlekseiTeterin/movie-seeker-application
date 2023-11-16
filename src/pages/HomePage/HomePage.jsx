import React from 'react';
import style from './HomePage.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import Search from '../../components/Search/Search';
import { useGetMoviesQuery } from '../../store/api/movieApi';

function HomePage() {
  const { data, isLoading, error } = useGetMoviesQuery(6);

  if (error) {
    return <div className={style.home}>Something error</div>;
  }
  if (isLoading) {
    return <div className={style.home}>Loading...</div>;
  }
  return (
    <div>
      <div>
        <Search />
      </div>
      
      <div className={style.home}>
        {data.docs.map((movie) => (
          <MovieCard key={movie.id} movieId={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
