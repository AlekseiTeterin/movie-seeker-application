/* eslint-disable no-const-assign */
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store';
import { IsAuthContext } from '../../store/IsAuthContext';
import { setCurrentUser } from '../../store/slices/currentUserSlice';
import { setFavourite } from '../../store/slices/favouriteSlice';
import { setHistory } from '../../store/slices/historySlice';
import getDataFromLS from '../../utils/getDataFromLS';
import LSKeyBuilder from '../../utils/LSKeyBuilder';
import setDataInLS from '../../utils/setDataInLS';
import RegisterForm from '../Forms/RegisterForm';

function SignUp() {
  const dispatch = useDispatch();
  const { toggleAuth } = useContext(IsAuthContext);

  const register = (name, password) => {
    dispatch(
      setCurrentUser({
        userName: name,
        userPassword: password,
      })
    );
    const user = store.getState().currentUser;
    setDataInLS('currentUser', user);
    toggleAuth();
    const array = Array.from(
      getDataFromLS('users') || {
        name: 'Andrew',
        password: 'rdfs2Dweq',
      }
    );
    array.push(user);
    setDataInLS('users', array);
    dispatch(setFavourite([]));
    dispatch(setHistory([]));
    setDataInLS(LSKeyBuilder('favourite'), []);
    setDataInLS(LSKeyBuilder('history'), []);
  };

  return <RegisterForm handleSubmit={register} buttonName='Отправить данные' />;
}

export default SignUp;
