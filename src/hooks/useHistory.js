import { useSelector } from 'react-redux';

const useHistory = () => useSelector((state) => state.history.history);

export default useHistory;
