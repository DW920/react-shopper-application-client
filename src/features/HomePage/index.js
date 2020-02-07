import React from 'react';
import { withRouter } from 'react-router-dom'
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';
import LoginForm from 'components/LoginForm';

const HomePage = (props) => {
  const { state, state: { loggedIn } } = useProfileProvider();
  console.log(document.cookie);
  return (
    <div className="home-page">
      <h1>Welcome to the HomePage, the future home of greatness!</h1>
      <h2>{JSON.stringify(state)}</h2>
      {loggedIn ? <Logout /> : <LoginForm history={props.history} />}
    </div>
  );
};

export default withRouter(HomePage);
