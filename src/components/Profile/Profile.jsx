import cl from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={cl.profile}>
      <div className={cl.description}>
        <img src={avatar} alt="User avatar" className={cl.avatar} />
        <p className={cl.name}>{username}</p>
        <p className={cl.tag}>@{tag}</p>
        <p className={cl.location}>{location}</p>
      </div>

      <ul className={cl.stats}>
        <li>
          <span className={cl.label}>Followers</span>
          <span className={cl.quantity}>{followers}</span>
        </li>
        <li>
          <span className={cl.label}>Views</span>
          <span className={cl.quantity}>{views}</span>
        </li>
        <li>
          <span className={cl.label}>Likes</span>
          <span className={cl.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
