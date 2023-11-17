import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import style from './HistoryPage.module.scss';
import useHistory from '../../hooks/useHistory';
import { IsAuthContext } from '../../store/IsAuthContext';
import { removeHistory } from '../../store/slices/historySlice';

function HistoryPage() {
    const historyArray = useHistory();
    const dispatch = useDispatch();
    const reverseHistoryArray = JSON.parse(
        JSON.stringify(historyArray)
    ).reverse();
    const { isAuth } = useContext(IsAuthContext);

    if (!isAuth) return <Navigate to='/signin' />;
    if (historyArray.length === 0) {
        return (
            <div className={style.history}>
                <h1>История запросов пока пуста</h1>
            </div>
        );
    }
    return (
        <div className={style.history}>
            <h1>История поисковых запросов:</h1>
            <div className={style.queryList}>
                {reverseHistoryArray.map((elem) => (
                    <div
                        className={style.rowStyle}
                        key={reverseHistoryArray.indexOf(elem)}
                    >
                        <Link
                            className={style.name}
                            to={`/search/${elem.query}`}
                        >
                            {elem.query}
                        </Link>
                        <div>{elem.time}</div>
                    </div>
                ))}
            </div>
            <button
                type='button'
                className={style.btn}
                onClick={() => {
                    dispatch(removeHistory());
                }}
            >
                Очистить историю запросов
            </button>
        </div>
    );
}

export default HistoryPage;
