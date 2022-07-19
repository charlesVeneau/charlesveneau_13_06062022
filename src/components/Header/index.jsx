import Logo from '../../assets/images/argentBankLogo.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../store/slices/authorizationThunk';
import history from '../../utils/history';

function Header() {
  const dispatch = useDispatch();
  const { token, userData } = useSelector((state) => state.authorization);
  const location = useLocation();

  function logout() {
    switch (location.pathname) {
      case '/dashboard':
        history.push('/');
        break;
      default:
        break;
    }
    window.location.reload();
    dispatch(signOut());
  }
  return (
    <header className="header-nav">
      <NavLink className="header-nav-logo" to="/">
        <img
          className="header-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      {token ? (
        <nav className="header-nav-list">
          <p className="header-nav-item">
            <i className="fa fa-user-circle"></i>
            {userData.firstName}
          </p>
          <p className="header-nav-item" onClick={() => logout()}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </p>
        </nav>
      ) : (
        <nav className="header-nav-list">
          <NavLink className="header-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
