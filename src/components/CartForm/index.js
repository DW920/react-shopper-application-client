import React, { useState } from 'react';

const CartForm = (props) => {
  const { addItem, username } = props;
  const [itemInfo, setItemInfo] = useState({ });

  const addToCart = (event) => {
    event.preventDefault();
    addItem({ itemInfo })
  };

  /**
   * A reusable function to update the state with a key/value pair where the
   * key is the name of the component and the value is its most recent value...
   *
   * This is a great pattern to use if you need to make the UI react to the input
   * in more complex forms and if you need the most recent value of the users'
   * submission before they click submit for validation purposes...
   * @param name
   * @param value
   */
  const updateInput = ({ target: { name, value } }) => {
    setItemInfo(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form className="Cart-form">
      <label> Name </label>
      <input name="name" type="text" onChange={updateInput} /><br/><br/>
      <label> Cost </label>
      <input name="cost" type="text" onChange={updateInput} /><br/><br/>
      <button type="submit" onClick={addToCart}>
        Add To Cart
      </button>
    </form>
  );
};

export default CartForm;
