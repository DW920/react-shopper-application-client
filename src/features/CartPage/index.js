import React, { useEffect, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { useProfileProvider } from 'contexts/profile';
import { useCartProvider } from 'contexts/cart';
import CartForm from 'components/CartForm';
import CardPanel from 'components/CartPanel';
import { useBalanceProvider } from 'contexts/balance';

const CartPage = (props) => {
 
  const { state: user} = useProfileProvider()
  const { addItem, removeItem, checkout, state: { items, totalCost } } = useCartProvider();
  const { state: { balance } } = useBalanceProvider();
  const { loggedIn, username } = user;
  
  if(loggedIn){
      return (
        <div className="home-page">
          <h1>Welcome to the CartPage</h1>
          <CartForm username={username} addItem={addItem} />
          <CardPanel 
            items={items} 
            balance={balance} 
            totalCost={totalCost} 
            checkout={checkout} 
            removeItem={removeItem}
          />
        </div>
      )
    
  } else {
    return (<Redirect to='/'/>)
  }
  
};

export default withRouter(CartPage);
