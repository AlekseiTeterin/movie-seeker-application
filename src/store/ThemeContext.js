/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext(null);

function ThemeContextProvider({ children }) {

    const isBrowserDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const getDefaultThemeMode = () => {
        const localStorageTheme = localStorage.getItem('theme');
        const browserDefault = isBrowserDefaultDark ? 'dark' : 'light';

        return localStorageTheme !== null ? localStorageTheme : browserDefault;
    };

    const [isThemeLight, setTheme] = useState(getDefaultThemeMode === 'light');

    const toggleTheme = () => setTheme(!isThemeLight);

    useLayoutEffect(() => {
        localStorage.setItem('theme', isThemeLight ? 'light' : 'dark');

        if (isThemeLight) {
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.add('light-mode');
        } else {
            document.documentElement.classList.remove('light-mode');
            document.documentElement.classList.add('dark-mode');
        }
    }, [isThemeLight]);


    return (
        <ThemeContext.Provider value={{ isThemeLight, toggleTheme }}>{children}</ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };