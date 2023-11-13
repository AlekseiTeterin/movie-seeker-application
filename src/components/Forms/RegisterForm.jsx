/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ConfirmPasswordField from './FormsComponents/ConfirmPasswordField';
import NameField from './FormsComponents/NameField';
import PasswordField from './FormsComponents/PasswordField';
import style from './FormsStyle.module.scss';
import isOccupiedName from '../../utils/isOccupiedName';

function RegisterForm({ handleSubmit, buttonName }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [altText, setAltText] = useState('');
  const [altTextPassword, setAltTextPassword] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
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
      <ConfirmPasswordField
        oldPasswordValue={password}
        confirmedPassword={confirmPassword}
        setConfirmedPassword={setConfirmPassword}
        isEquals={isConfirmed}
        setIsEquals={setIsConfirmed}
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {
          if (isConfirmed && altText === '' && altTextPassword === '') {
            if (!isOccupiedName(name)) {
              handleSubmit(name, password);
              navigate('/');
            } else {
              alert('Такое имя уже есть в системе');
            }
          }
        }}
      >
        {buttonName}
      </Button>
    </Container>
  );
}

RegisterForm.propTypes = {
  handleSubmit: propTypes.func,
  buttonName: propTypes.string,
};

export default RegisterForm;
