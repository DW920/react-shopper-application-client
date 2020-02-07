import React, { useState } from 'react';

const CheckoutForm = (props) => {
  const { balance, totalCost, checkout } = props;
  const updatedBalance = balance - totalCost;

  return (
    <form className="Cart-form">
      <h1>Checkout Page</h1>
      <label> Your Balance: {balance} </label>
      <label> Total Cost: {totalCost} </label>
      <hr/>
      <label> Your balance will be: {updatedBalance} </label>
      <button type="submit" onClick={checkout}>
        CheckOut
      </button>
    </form>
  );
};

export default CheckoutForm;
