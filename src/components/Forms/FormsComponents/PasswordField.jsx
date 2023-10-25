/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import propTypes from 'prop-types';
import * as constants from '../../../CONSTANTS';
import formValidator from '../../../utils/formValidator';

function PasswordField({
    passwordValue,
    setPasswordValue,
    passwordInfo,
    setPasswordInfo,
}) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <TextField
            label='Введите пароль 8 - 20 символов'
            type={showPassword ? 'text' : 'password'}
            required
            value={passwordValue}
            fullWidth
            margin='normal'
            onChange={(e) => {
                setPasswordValue(e.target.value);
                setPasswordInfo(formValidator(e.target.value, true));
            }}
            helperText={
                passwordInfo !== ''
                    ? passwordInfo
                    : constants.PASSWORD_FIELD_TEXT
            }
            error={Boolean(passwordInfo)}
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

PasswordField.propTypes = {
    passwordValue: propTypes.string,
    setPasswordValue: propTypes.func,
    passwordInfo: propTypes.string,
    setPasswordInfo: propTypes.func,
};

export default PasswordField;
