import React from 'react';


const Item = ({ name, cost }) => (
  <div className="item">
    <label> Name: </label> <span>{ name }</span> <span> | </span>
    <label> Cost: </label> <span>{ cost }</span>
  </div>
)
const CartPanel = (props) => {
  const { items, totalCost } = props;
  console.log('cartpanel items', items)
  return (
    <div>
      <div className="item-board">
      <h4>{ totalCost }</h4>
      {
        items?(
          items.map(item => <Item { ...item } />)
        ):(
          <span>...Loading</span>
        )
      }
      </div>
    </div>
  );
};

export default CartPanel;
