import React from 'react';


const Item = ({ name, cost, removeItem, index }) => (
  <div className="item">
    <label> Name: </label> <span>{ name }</span> <span> | </span>
    <label> Cost: </label> <span>{ cost }</span>
    <button onClick={() => removeItem(index) }> remove</button>
  </div>
)
const CartPanel = (props) => {
  const { items, balance, totalCost, checkout, removeItem } = props;
 
  return (
    <div>
      <div className="item-board">
        <br/>
      <label>Balance: { balance }</label>
      <label>Total Cost: { totalCost }</label>
      <button onClick={() => checkout()}>checkout</button>
      <br/><br/>
      {
        items?(
          items.map((item, index) => <Item key={index} index={index} { ...item } removeItem={removeItem} />)
        ):(
          <span>...Loading</span>
        )
      }
      </div>
    </div>
  );
};

export default CartPanel;
