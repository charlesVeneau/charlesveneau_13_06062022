import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store';
import history from './utils/history';
import { Provider } from 'react-redux';
import { getToken } from './utils/HelperFunctions';
import { fetchUserData } from './store/slices/authorizationThunk';
import './Sass/index.scss';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';

if (getToken()) {
  store.dispatch(fetchUserData());
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
