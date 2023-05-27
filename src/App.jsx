import { Statistics } from 'components/statistics/Statistics';
import { Profile } from './components/profile/Profile';
import { FriendList } from './components/friends/FriendList';
import { TransactionHistory } from './components/transactionHistory/TransactionHistory';

import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friends/friends.json';
import transactions from './components/transactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#D0D0D0',
      }}
    >
      <Profile
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
        tag={user.tag}
        username={user.username}
      />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
