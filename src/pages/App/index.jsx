import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../Home';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Error from '../Error';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoutes';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function App() {
  const token = useSelector((state) => state.authorization.token);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute token={token} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}

export default App;
