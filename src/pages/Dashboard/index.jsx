import data from '../../data.json';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/slices/authorizationThunk';
import Account from '../../components/Account/index.jsx';

function Dashboard() {
  const user = data.user;
  return (
    <main className="main bg-dark">
      <section className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
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