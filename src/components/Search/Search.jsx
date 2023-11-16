/* eslint-disable react/require-default-props */
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Search.module.scss';
import CssTextField from './TextFieldMui';
import useDebounce from '../../hooks/useDebounce';
import { useGetMovieByNameQuery } from '../../store/api/movieApi';
import { IsAuthContext } from '../../store/IsAuthContext';
import { addToHistory } from '../../store/slices/historySlice';
import getTimeStamp from '../../utils/getTimeStamp';

function Search() {
  const { isAuth } = useContext(IsAuthContext);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const debounce = useDebounce(searchValue);
  const addToHistoryHandler = () => {
    if (searchValue !== '') {
      dispatch(addToHistory({ query: searchValue, time: getTimeStamp() }));
    }
  };
  const { data } = useGetMovieByNameQuery(debounce, {
    skip: debounce.length < 3,
  });

  return (
    <div>
      <div className={style.searchField}>
        <div className={style.searchAndButton}>
          <CssTextField
            className={style.textField}
            color='primary'
            label='Введите поисковый запрос'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Link
            className={style.btn}
            to={isAuth ? `/search/${searchValue}` : '/signin'}
            onClick={addToHistoryHandler}
          >
            Поиск
          </Link>
        </div>
      </div>
      <div className={style.dropList}>
        <ul>
          {data?.slice(0, 6).map((film) => (
            <Link
              key={film.id}
              to={isAuth ? `/search/${film.name}` : '/signin'}
              onClick={() =>
                dispatch(
                  addToHistory({
                    query: film.name,
                    time: getTimeStamp(),
                  })
                )
              }
            >
              <li className={style.listItems}>{film.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
