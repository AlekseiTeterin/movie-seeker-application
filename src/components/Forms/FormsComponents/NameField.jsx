/* eslint-disable react/require-default-props */
import React from 'react';
import { TextField } from '@mui/material';
import propTypes from 'prop-types';
import * as constants from '../../../CONSTANTS';
import formValidator from '../../../utils/formValidator';

function NameField({ userName, setUserName, infoText, setInfoText }) {
    return (
        <TextField
            label='Введите Nick-Name'
            value={userName}
            margin='normal'
            required
            fullWidth
            autoFocus
            onChange={(e) => {
                setUserName(e.target.value);
                setInfoText(formValidator(e.target.value, false));
            }}
            helperText={infoText !== '' ? infoText : constants.NAME_FIELD_TEXT}
            error={Boolean(infoText)}
        />
    );
}

NameField.propTypes = {
    userName: propTypes.string,
    setUserName: propTypes.func,
    infoText: propTypes.string,
    setInfoText: propTypes.func,
};

export default NameField;
