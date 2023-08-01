import PropTypes from 'prop-types';
import cl from './friendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={cl.item}>
      <span className={isOnline ? cl.green : cl.red}></span>
      <img className={cl.avatar} src={avatar} alt="User avatar" width="60" />
      <p className={cl.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
