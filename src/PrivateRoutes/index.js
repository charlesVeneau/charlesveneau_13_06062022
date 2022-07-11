import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ , ...rest }) {
  const { loading } = useSelector((state) => state.authorization);
  const location = useLocation()
 
  if(loading){
    return (
        <div>Loading...</div>
    )
  }

  if(token) {
    return (
        <Outlet/>
    )
  } else {
    <Navigate to ="login" state={{location}}/>
  }
}

export default PrivateRoute;
