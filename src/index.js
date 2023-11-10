import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';
import './index.scss';
import { IsAuthContextProvider } from './store/IsAuthContext';
import './firebase'
import { ThemeContextProvider } from './store/ThemeContext';

const container = document.getElementById('root');
const root = createRoot(container);

function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <IsAuthContextProvider>
          <ThemeContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeContextProvider>
        </IsAuthContextProvider>
      </Provider>
    </React.StrictMode>
  );
}

root.render(<Main />);
