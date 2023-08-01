import FriendListItem from 'components/FriendListItem';
import cl from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={cl.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
