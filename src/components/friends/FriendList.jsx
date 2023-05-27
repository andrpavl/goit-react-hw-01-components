import { FriendsListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendsListItem
            avatar={friend.avatar}
            name={friend.name}
            id={friend.id}
            isOnline={friend.isOnline}
            key={friend.id}
          ></FriendsListItem>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = { friends: PropTypes.array.isRequired };
