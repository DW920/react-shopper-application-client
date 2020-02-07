import React from 'react';


const Item = ({ name, cost }) => (
  <div className="item">
    <label> Name: </label> <span>{ name }</span> <span> | </span>
    <label> Cost: </label> <span>{ cost }</span>
  </div>
)
const CartPanel = (props) => {
  const { items } = props;
  return (
    <div>
      <div className="item-board">
      { items.map(item => <Item { ...item } />) }
      </div>
    </div>
  );
};

export default CartPanel;
