import React from 'react';
import { withRouter } from 'react-router-dom'
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';
import LoginForm from 'components/LoginForm';
import { useBalanceProvider } from 'contexts/balance';
import { useCartProvider } from 'contexts/cart';



const HomePage = (props) => {
  const { state, state: { loggedIn } } = useProfileProvider();
  const { getBalance } = useBalanceProvider();
  const { getItems } = useCartProvider();
  console.log(document.cookie);
  return (
    <div className="home-page">
      <h1>Welcome to the HomePage, the future home of greatness!</h1>
      <h2>{JSON.stringify(state)}</h2>
      {loggedIn ? <Logout /> : 
      (
        <LoginForm 
          history={props.history} 
          getBalance={getBalance} 
          getItems={getItems}
        />
      )}
    </div>
  );
};

export default withRouter(HomePage);
