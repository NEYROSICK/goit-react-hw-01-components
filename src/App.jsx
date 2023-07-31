import Profile from './components/Profile';
import user from './assets/user.json';

const App = () => {
  return <Profile {...user} />;
};

export default App;
