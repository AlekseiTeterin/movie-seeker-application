import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';
import './index.css';
import { IsAuthContextProvider } from './store/IsAuthContext';

const container = document.getElementById('root');
const root = createRoot(container);

function Main() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                    <IsAuthContextProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </IsAuthContextProvider>
            </Provider>
        </React.StrictMode>
    );
}

root.render(<Main />);
