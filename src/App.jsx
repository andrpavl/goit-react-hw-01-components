import { Statistics } from 'components/statistics/Statistics';
import { Profile } from './components/profile/Profile';
import { FriendList } from './components/friends/FriendList';
import { TransactionHistory } from './components/transactionHistory/TransactionHistory';

import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friends/friends.json';
import transactions from './components/transactionHistory/transactions.json';
import css from './main.module.css';

export const App = () => {
  return (
    <div className={css.main}>
      <Profile
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
        tag={user.tag}
        username={user.username}
      />
      <Statistics data={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
