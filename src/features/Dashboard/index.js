import React from 'react';
import { withRouter } from 'react-router-dom'
import { useProfileProvider } from 'contexts/profile';
import Logout from 'components/Logout';

const Dashboard = (props) => {
  const { history } = props;
  const { state: { name: { first } } } = useProfileProvider();

  return (
    <div className="dashboard">
      <h1>{`Welcome ${first}!`}</h1>
      <Logout />
      <button onClick={() => history.push('/cart')}>Go To Cart Page...</button>
    </div>
  );
};

export default withRouter(Dashboard);
