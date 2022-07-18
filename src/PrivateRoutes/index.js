import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

function PrivateRoute({ token, ...rest }) {
  const { loading } = useSelector((state) => state.authorization);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (token) {
    return <Outlet />;
  } else {
    return (
      <main className="main error">
        <p className="error-text">An error occurred. Please try again later.</p>
        <NavLink to="/" className="home-button">
          Home
        </NavLink>
      </main>
    );
  }
}

export default PrivateRoute;
