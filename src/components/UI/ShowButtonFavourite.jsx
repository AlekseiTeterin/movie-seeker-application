/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import ButtonFavourite from './ButtonFavourite';
import { IsAuthContext } from '../../store/IsAuthContext';

function ShowButtonFavourite({ filmId }) {
    const { isAuth } = useContext(IsAuthContext);
    return isAuth ? <ButtonFavourite id={filmId} /> : <div />;
}

export default ShowButtonFavourite;
