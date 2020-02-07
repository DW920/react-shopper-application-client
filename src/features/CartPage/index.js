import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { useProfileProvider } from 'contexts/profile';
import { useCartProvider } from 'contexts/cart';
import CartForm from 'components/CartForm';
import CardPanel from 'components/CartPanel';

const CartPage = (props) => {
 
  const { state: user} = useProfileProvider()
  const { getItems, addItem, state: { items } } = useCartProvider();

  const { loggedIn, username } = user;
  
  getItems(user);

  return loggedIn?(
    <div className="home-page">
      <h1>Welcome to the CartPage</h1>
      <CartForm username={username} addItem={addItem} />
      <CardPanel items={items} />
    </div>
  ):(<Redirect to='/'/>);
};

export default withRouter(CartPage);
