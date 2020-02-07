import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ProfileProvider, useProfileProvider } from 'contexts/profile';
import { CartProvider } from 'contexts/cart';
import HomePage from 'features/HomePage';
import Dashboard from 'features/Dashboard';
import CartPage from 'features/CartPage';
import Register from 'components/RegisterForm';

import { withCookies } from 'react-cookie';

/**
 * Renders a react-router enabled app with a wrapper to facilitate shared styles
 * and markup; add new routes for pages here.
 */
const App = (props) => (
  
    <Router>
      <ProfileProvider>
        <CartProvider>
          <Switch>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/cart" component={CartPage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" render={() => <Register cookies={props.cookies} />}/>
          </Switch>
        </CartProvider>
      </ProfileProvider>
    </Router>
 
);


const ProtectedRoute = (props) => {
  const { state: { loggedIn } } = useProfileProvider();
  if (!loggedIn) return <Redirect to="/" />;

  return (<Route {...props} />);
};

export default withCookies(App);
