import Profile from './components/Profile';
import Statistics from 'components/Statistics/Statistics';
import user from './assets/user.json';
import data from './assets/data.json';

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload Stats" stats={data} />;
    </>
  );
};

export default App;
