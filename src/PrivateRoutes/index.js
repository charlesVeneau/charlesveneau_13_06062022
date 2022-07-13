import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ token, ...rest }) {
  const { loading } = useSelector((state) => state.authorization);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (token) {
    return <Outlet />;
  } else {
    console.log('no token');
    console.log(location);
    <Navigate to="/login" />;
  }
}

export default PrivateRoute;
