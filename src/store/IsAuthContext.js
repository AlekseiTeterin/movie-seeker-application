/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const IsAuthContext = React.createContext();

function IsAuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(
        localStorage.getItem('currentUser') !== null
            ? !!JSON.parse(localStorage.getItem('currentUser')).userName
            : false
    );
    const toggleAuth = () => setIsAuth(!isAuth);

    return (
        <IsAuthContext.Provider value={{ isAuth, toggleAuth }}>
            {children}
        </IsAuthContext.Provider>
    );
}

export { IsAuthContext, IsAuthContextProvider };
