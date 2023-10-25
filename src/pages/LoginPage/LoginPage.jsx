import React from 'react';
import { Link } from 'react-router-dom';
import style from './LoginPage.module.css';
import SignIn from '../../components/SignIn/SignIn';

function LoginPage() {
    return (
        <div className={style.login}>
            <h3 className={style.title}>Войти в профиль</h3>
            <SignIn />
            <p className={style.alternative}>
                Ещё не зарегестрированы?{' '}
                <Link to='/signup' className={style.link}>
                    Регистрация
                </Link>
            </p>
        </div>
    );
}

export default LoginPage;
