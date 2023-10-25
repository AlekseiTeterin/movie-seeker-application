import localStorageKey from '../utils/LSKeyBuilder';

const localStorageMiddleware = (state) => (next) => (action) => {
    const { favourites } = state.getState().favourite;
    const { history } = state.getState().history;

    switch (action.type) {
        case 'favourite/addToFavourite':
            localStorage.setItem(
                localStorageKey('favourite'),
                JSON.stringify([...favourites, action.payload])
            );
            break;
        case 'favourite/deleteFromFavourite':
            localStorage.setItem(
                localStorageKey('favourite'),
                JSON.stringify(favourites.filter((k) => k !== action.payload))
            );
            break;
        case 'history/addToHistory':
            localStorage.setItem(
                localStorageKey('history'),
                JSON.stringify([...history, action.payload])
            );
            break;
        case 'history/removeHistory':
            localStorage.setItem(
                localStorageKey('history'),
                JSON.stringify([])
            );
            break;
        default:
            break;
    }

    return next(action);
};

export default localStorageMiddleware;
