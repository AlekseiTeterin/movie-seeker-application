/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
import React, { useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './BaseLayout.module.css';
import { IsAuthContext } from '../../store/IsAuthContext';
import { removeCurrentUser } from '../../store/slices/currentUserSlice';
import { setFavourite } from '../../store/slices/favouriteSlice';
import { setHistory } from '../../store/slices/historySlice';
import { ThemeContext } from '../../store/ThemeContext';
import getHistoryOrFavouriteLS from '../../utils/getHistoryOrFavouriteLS';
import setDataInLS from '../../utils/setDataInLS';
import ButtonSwitch from '../UI/ButtonSwitch';

function IsAuth() {
  const dispatch = useDispatch();
  const { isAuth, toggleAuth } = useContext(IsAuthContext);
  const { isThemeLight, toggleTheme } = useContext(ThemeContext);
  const user = useSelector((state) => state.currentUser);
  dispatch(setHistory(getHistoryOrFavouriteLS('history')));
  dispatch(setFavourite(getHistoryOrFavouriteLS('favourite')));

  const clickHandler = () => {
    dispatch(removeCurrentUser());
    setDataInLS('currentUser', {});
    toggleAuth();
  };

  const changeThemeHandler = () => {
    toggleTheme();
  };

  return (
    <ul className={style.links}>
      <li>
        <ButtonSwitch checked={isThemeLight} onChange={changeThemeHandler} />
      </li>
      {!isAuth ? (
        <>
          <li>
            <NavLink to='/signin'>Войти</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>Регистрация</NavLink>
          </li>
        </>
      ) : (
        <>
          <li className={style.user}>{user.userName}</li>
          <li>
            <NavLink to='/favourite'>Избранное</NavLink>
          </li>
          <li>
            <NavLink to='/history'>История</NavLink>
          </li>
          <li>
            <NavLink to='/' onClick={clickHandler}>
              Выйти
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
}

export default IsAuth;
