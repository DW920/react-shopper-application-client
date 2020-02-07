import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useReducer, useContext } from 'react';

const BASE_URL = 'http://localhost:5000/api';

const GETITEMS = 'GETITEM';
const ADDITEM = 'ADDITEM';
const REMOVEITEM = 'REMOVEITEM'
const EMPTYITEMS = 'EMPTYITEMS';
const CHECKOUT = 'CHECKOUT';

let initialItems = {};

// axios
//   .get(`${BASE_URL}/cart/`, {}, { withCredentials: true })
//   .then(({ data }) => {
//     initialItems = data
//   });

const initialState = { ...initialItems };
const store = createContext(initialState);
const { Provider } = store;



axios.defaults.withCredentials = true;

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    const { type, payload } = action;

    switch (type) {
      case GETITEMS: {
        // Store the profile data in the state
       
        return { ...prevState, ...payload };
      }
      case ADDITEM: {
        // Store the profile data in the state
        console.log('additem', payload)
        return { ...prevState, ...payload };
      }
      case REMOVEITEM: {
        // Store the profile data in the state
       
        return { ...prevState, ...payload };
      }
      case EMPTYITEMS: {
        // Store the profile data in the state
       
        return { ...prevState, ...payload };
      }
      case CHECKOUT: {
        // Store the profile data in the state
       
        return { ...prevState, ...payload };
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useCartProvider = () => {
  const { state, dispatch } = useContext(store);

  const getItems = () => axios
    .get(`${BASE_URL}/cart/`, {},{ withCredentials: true })
    .then(({ data }) => {
      dispatch({ type: GETITEMS, payload: data });
    });
    
  const addItem = itemInfo => {
    axios
      .post(`${BASE_URL}/cart`, itemInfo, { withCredentials: true })
      .then(({ data }) => {
        dispatch({ type: ADDITEM, payload: data });
      });
  }

  const removeItem = (itemIndex) => axios
    .post(`${BASE_URL}/cart/remove`, {itemIndex})
    .then(({ data }) => {
      dispatch({ type: REMOVEITEM, payload: data });
    });

  const emptyItems = () => axios
    .post(`${BASE_URL}/cart/empty`)
    .then(({ data }) => {
      dispatch({ type: EMPTYITEMS, payload: data });
    });

  const checkout = (balance) => axios
    .post(`${BASE_URL}/cart/checkout`, {balance})
    .then(({ data }) => {
      dispatch({ type: CHECKOUT, payload: data });
    });

  return {
    state,
    dispatch,
    getItems,
    addItem,
    removeItem,
    emptyItems,
    checkout,
  };
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider, useCartProvider };
