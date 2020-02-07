import React, { useEffect, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { useProfileProvider } from 'contexts/profile';
import { useCartProvider } from 'contexts/cart';
import CartForm from 'components/CartForm';
import CardPanel from 'components/CartPanel';

const CartPage = (props) => {
 
  const { state: user} = useProfileProvider()
  
  const { addItem, state: { items, totalCost }, state } = useCartProvider();
  console.log('real state', state)
  const { loggedIn, username } = user;
  
 
  // useEffect(() => {
  //   getItems(user);
  // });
  
  
  if(loggedIn){
      return (
        <div className="home-page">
          <h1>Welcome to the CartPage</h1>
          <CartForm username={username} addItem={addItem} />
          <CardPanel items={items} totalCost={totalCost} />
        </div>
      )
    
  } else {
    return (<Redirect to='/'/>)
  }
  
};

export default withRouter(CartPage);
