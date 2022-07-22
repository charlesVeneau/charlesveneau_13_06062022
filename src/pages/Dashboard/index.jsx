import UserForm from '../../components/UserForm';
import data from '../../data.json';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Account from '../../components/Account/index.jsx';
import { fetchUserData } from '../../store/slices/authorizationThunk';

function Dashboard() {
  const user = data.user;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchUserData);
  }, [dispatch]);

  const userData = useSelector((state) => state.authorization.userData);

  function handleChange(e) {
    e.preventDefault();
    setIsEditing((isEditing) => !isEditing);
  }

  return (
    <main className="main bg-dark">
      <section className="header">
        <h1>
          Welcome back
          <br />
          {isEditing ? (
            <UserForm
              firstName={userData.firstName}
              lastName={userData.lastName}
            />
          ) : (
            <span className="header-info">
              <span id="firstName">{userData.firstName}</span>{' '}
              <span id="lastName">{userData.lastName}</span>!
            </span>
          )}
        </h1>
        <button
          className="edit-button"
          data-edit={isEditing}
          onClick={handleChange}
        >
          {isEditing ? 'Update Name' : 'Edit Name'}
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
