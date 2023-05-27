import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.listItem} key={id}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
