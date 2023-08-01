import Profile from './components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends';

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload Stats" stats={data} />;
      <Statistics stats={data} />;
      <FriendList friends={friends} />
    </>
  );
};

export default App;
