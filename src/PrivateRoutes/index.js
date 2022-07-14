import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function PrivateRoute({ token, ...rest }) {
  const { loading } = useSelector((state) => state.authorization);
  console.log(`private token : ${token}`);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (token) {
    return <Outlet />;
  } else {
    return (
      <div>
        Une erreur est survenue. Veuillez nous excuser pour la géne occasionnée.
      </div>
    );
  }
}

export default PrivateRoute;
