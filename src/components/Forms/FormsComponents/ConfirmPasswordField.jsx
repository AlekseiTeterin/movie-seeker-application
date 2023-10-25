/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import propTypes from 'prop-types';

function ConfirmPasswordField({
    oldPasswordValue,
    confirmedPassword,
    setConfirmedPassword,
    isEquals,
    setIsEquals,
}) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <TextField
            label='Повторите пароль'
            type={showPassword ? 'text' : 'password'}
            required
            value={confirmedPassword}
            fullWidth
            margin='normal'
            onChange={(e) => {
                setConfirmedPassword(e.target.value);
                if (e.target.value === oldPasswordValue) {
                    setIsEquals(true);
                } else {
                    setIsEquals(false);
                }
            }}
            helperText={isEquals ? '' : 'Значения паролей не совпадают!'}
            error={confirmedPassword !== '' && !isEquals}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label='toggle password visibility'
                            onClick={() => setShowPassword(!showPassword)}
                            edge='end'
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

ConfirmPasswordField.propTypes = {
    oldPasswordValue: propTypes.string,
    confirmedPassword: propTypes.string,
    setConfirmedPassword: propTypes.func,
    isEquals: propTypes.bool,
    setIsEquals: propTypes.func,
};

export default ConfirmPasswordField;
