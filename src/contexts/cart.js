import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useReducer, useContext } from 'react';

const initialState = { items: [] };
const store = createContext(initialState);
const { Provider } = store;

const BASE_URL = 'http://localhost:5000/api';

const GETITEMS = 'GETITEM';
const ADDITEM = 'ADDITEM';
axios.defaults.withCredentials = true;
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    const { type, payload } = action;

    switch (type) {
      case GETITEMS: {
        // Store the profile data in the state
        return { ...prevState, items: payload };
      }
      case ADDITEM: {
        // Store the profile data in the state
        const updatedItems = prevState.items.push(payload)
        return { ...prevState, items: updatedItems };
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
    .get(`${BASE_URL}/cart/`)
    .then(({ data }) => {
      dispatch({ type: GETITEMS, payload: data });
    });
    
  const addItem = itemInfo => axios
    .post(`${BASE_URL}/cart`, itemInfo)
    .then(({ data }) => {
      dispatch({ type: ADDITEM, payload: data });
    });

  return {
    state,
    dispatch,
    getItems,
    addItem,
  };
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider, useCartProvider };
