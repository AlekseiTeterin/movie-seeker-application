import { useSelector } from 'react-redux';

const useFavourite = () => useSelector((state) => state.favourite.favourites);

export default useFavourite;
