// import { Profile, FriendList, TransactionHistory } from 'components';

import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Section from '../Section/Section';
// import Profile from '../Profile/Profile';
// import FriendList from '../FriendList/FriendList';
// import TransactionHistory from '../TransactionHistory/TransactionHistory';
const App = () => {
  return (
    <Section>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Section>
  );
};

export default App;
