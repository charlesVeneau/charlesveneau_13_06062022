import { useState } from 'react';
import { getToken } from '../../utils/HelperFunctions';
import { login } from '../../store/slices/authorizationThunk';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../utils/history';

function Login() {
  //local state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { token, loading, status } = useSelector(
    (state) => state.authorization
  );

  if (token || getToken()) {
    history.push('/dashboard');
    window.location.reload();
  }

  function handleLogin(e) {
    e.preventDefault();
    const errorMsg = document.querySelector('.sign-in-error');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    if (emailInput.value === '' || passwordInput.value === '') {
      emailInput.classList.add('has-error');
      passwordInput.classList.add('has-error');
      errorMsg.classList.remove('isHidden');
    } else {
      setEmail(emailInput.value);
      setPassword(passwordInput.value);
      const credentials = {
        email: email,
        password: password,
      };
      dispatch(login(credentials));
    }
  }

  function handleRemember(event) {
    event.target.checked && localStorage.setItem('rememberMe', true);
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              value={email}
              className={status === 400 ? 'has-error' : undefined}
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
              className={status === 400 ? 'has-error' : undefined}
            />
          </div>
          <div
            className={`sign-in-error ${
              status !== 400 ? 'isHidden' : undefined
            }`}
          >
            The email or paswword is incorrect
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => {
                handleRemember(e);
              }}
            />
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
