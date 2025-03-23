// Css
import appCss from './app.module.css';
// Data
import userData from '/src/data/userdata.json';
import friends from '/src/data/friends.json';
import transactions from '/src/data/transactions.json';
// Components
import Profile from '../profile/profile.jsx';
import FriendList from '../friendlist/friendlist.jsx';
import TransactionHistory from '../transactionhistory/transactionhistory.jsx';

export default function App() {
  return (
    <div className={appCss.app_container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
