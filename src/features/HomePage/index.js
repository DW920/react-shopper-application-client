import React from 'react';
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';
import LoginForm from 'components/LoginForm';

const HomePage = () => {
  const { state, state: { loggedIn } } = useProfileProvider();
  return (
    <div className="home-page">
      <h1>Welcome to the HomePage, the future home of greatness!</h1>
      <h2>{JSON.stringify(state)}</h2>
      {loggedIn ? <Logout /> : <LoginForm />}
    </div>
  );
};

export default HomePage;
