import UserForm from '../../components/UserForm';
import data from '../../data.json';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Account from '../../components/Account/index.jsx';
import {
  fetchUserData,
  updateUserData,
} from '../../store/slices/authorizationThunk';

function Dashboard() {
  const user = data.user;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const userData = useSelector((state) => state.authorization.userData);

  useEffect(() => {
    dispatch(fetchUserData);
  }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    setIsEditing((isEditing) => !isEditing);
    if (e.target.getAttribute('data-edit') === 'true') {
      const identity = {
        firstName: firstName,
        lastName: lastName,
      };
      dispatch(updateUserData(identity));
    }
  }

  return (
    <main className="main bg-dark">
      <section className="header">
        <h1>
          Welcome back
          <br />
          {isEditing ? (
            <div className="userForm">
              <input
                className="userForm-input"
                id="firstName"
                type="text"
                defaultValue={userData.firstName}
              />
              <input
                className="userForm-input"
                id="lastName"
                type="text"
                defaultValue={userData.lastName}
              />
            </div>
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
