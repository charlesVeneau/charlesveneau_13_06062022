import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import Home from './pages/Home';
import Signin from './pages/Signin';
import User from './pages/User';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        //{' '}
        <Route path="/" element={<App />}>
          // <Route index element={<Home />} />
          // <Route path="signin" element={<Signin />} />
          // <Route path="user/:userId" element={<User />} />
          // <Route path="*" element={<Error />} />
          //{' '}
        </Route>
        //{' '}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
