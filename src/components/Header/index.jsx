import Logo from '../../assets/images/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

function Header() {
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
      <nav>
        <NavLink className="header-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
