import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { getToken } from '../../utils/HelperFunctions';
import { login } from '../../store/slices/authorizationThunk';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../utils/history';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.authorization);

  if (token || getToken()) {
    history.push('/dashboard');
  }

  function handleLogin(e) {
    e.preventDefault();

    const errorMsg = document.querySelector('.sign-in-error');
    if (username.value === '' || password.value === '') {
      username.classList.add('has-error');
      password.classList.add('has-error');
      errorMsg.classList.remove('isHidden');
    } else {
      username.classList.remove('has-error');
      password.classList.remove('has-error');
      errorMsg.classList.add('isHidden');
      dispatch(login({ username, password }));
    }
    console.log(`username : ${username.value} | password: ${password.value}`);
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              value={username}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
            />
          </div>
          <div className="sign-in-error isHidden">
            The username or paswword is incorrect
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
