import React from 'react';
import { Link } from 'react-router-dom';
import style from './RegisterPage.module.css';
import SignUp from '../../components/SignUp/SignUp';

function RegisterPage() {
    return (
        <div className={style.register}>
            <h3 className={style.title}>Регистрация нового пользователя</h3>
            <SignUp />
            <p className={style.alternative}>
                Уже регистрировались в системе?{' '}
                <Link to='/signin' className={style.link}>
                    Войти
                </Link>
            </p>
        </div>
    );
}

export default RegisterPage;
