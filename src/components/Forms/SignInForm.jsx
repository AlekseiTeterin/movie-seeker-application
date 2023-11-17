/* eslint-disable react/require-default-props */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import NameField from './FormsComponents/NameField';
import PasswordField from './FormsComponents/PasswordField';
import style from './FormsStyle.module.scss';

function SignInForm({ handleSubmit, buttonName }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [altText, setAltText] = useState('');
    const [altTextPassword, setAltTextPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <Container className={style.container} component='main'>
            <NameField
                userName={name}
                setUserName={setName}
                infoText={altText}
                setInfoText={setAltText}
            />
            <PasswordField
                isVisible={showPassword}
                setIsVisible={setShowPassword}
                passwordValue={password}
                setPasswordValue={setPassword}
                passwordInfo={altTextPassword}
                setPasswordInfo={setAltTextPassword}
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                    if (handleSubmit(name, password)) {
                        navigate('/');
                    } else {
                        alert('Вы ввели неверный логин или пароль :(');
                    }
                }}
            >
                {buttonName}
            </Button>
        </Container>
    );
}

SignInForm.propTypes = {
    handleSubmit: propTypes.func,
    buttonName: propTypes.string,
};

export default SignInForm;
