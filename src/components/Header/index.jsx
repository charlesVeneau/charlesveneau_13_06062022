import Logo from '../../assets/images/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../store/slices/authorizationThunk';

function Header() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authorization);
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
            Sign Out
          </p>
          <p className="header-nav-item" onClick={() => dispatch(signOut())}>
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
