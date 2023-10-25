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
import SignInForm from '../Forms/SignInForm';

function SignIn() {
    const dispatch = useDispatch();

    const { toggleAuth } = useContext(IsAuthContext);
    const handleLogin = (name, password) => {
        const array = Array.from(getDataFromLS('users') || {});
        
        let isTruthParams = false;
        array.forEach((el) => {
            if (el.userName === name && el.userPassword === password) {
                isTruthParams = true;
                toggleAuth();
                dispatch(
                    setCurrentUser({
                        userName: name,
                        userPassword: password,
                    })
                );
                setDataInLS('currentUser', store.getState().currentUser);
                dispatch(
                    setFavourite(getDataFromLS(LSKeyBuilder('favourite')) || [])
                );
                dispatch(
                    setHistory(getDataFromLS(LSKeyBuilder('history')) || [])
                );
            }
        });

        return isTruthParams;
    };

    return <SignInForm handleSubmit={handleLogin} buttonName='Войти' />;
}

export default SignIn;
