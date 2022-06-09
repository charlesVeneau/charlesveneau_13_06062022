import Logo from '../../assets/images/argentBankLogo.png';

function Header() {
  return (
    <header className="header-nav">
      <a className="header-nav-logo" href="./index.html">
        <img
          className="header-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <nav>
        <a className="header-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </nav>
    </header>
  );
}

export default Header;
