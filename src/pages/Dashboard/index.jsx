import data from '../../data.json';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/slices/authorizationThunk';
import Account from '../../components/Account/index.jsx';
import { fetchUserData } from '../../store/slices/authorizationThunk';

function Dashboard() {
  const user = data.user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData);
  }, [dispatch]);

  const userData = useSelector((state) => state.authorization.userData);

  return (
    <main className="main bg-dark">
      <section className="header">
        <h1>
          Welcome back
          <br />
          <p>
            <span id="firstName">{userData.firstName}</span>{' '}
            <span id="lastName">{userData.lastName}</span>!
          </p>
        </h1>

        <button className="edit-button" data-edit="false">
          Edit Name
        </button>
      </section>
      <h2 className="sr-only">Accounts</h2>
      {user &&
        user.accounts.map((account) => {
          return <Account key={account.id} account={account} />;
        })}
    </main>
  );
}

export default Dashboard;
