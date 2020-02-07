import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useReducer, useContext } from 'react';

const BASE_URL = 'http://localhost:5000/api';

const SETBALANCE = 'SETBALANCE';
const GETBALANCE = 'GETBALANCE';

let initialItems = {};

// axios
//   .get(`${BASE_URL}/balance/`, { withCredentials: true })
//   .then(({ data }) => {
//     console.log('balance', data)
//     initialItems = data;
//   });

const initialState = { ...initialItems };

const store = createContext(initialState);
const { Provider } = store;

axios.defaults.withCredentials = true;

const BalanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    const { type, payload } = action;

    switch (type) {
     
      case SETBALANCE: {
        // Store the profile data in the state
       
        return { ...prevState, ...payload };
      }
      case GETBALANCE: {
        // Store the profile data in the state
       
        return { ...prevState, ...payload };
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useBalanceProvider = () => {
  const { state, dispatch } = useContext(store);

  const setBalance = () => axios
    .post(`${BASE_URL}/cart/checkout`)
    .then(({ data }) => {
      dispatch({ type: SETBALANCE, payload: data });
    });
  
  const getBalance = () => axios
    .get(`${BASE_URL}/balance`, {}, { withCredentials: true })
    .then(({ data }) => {
      console.log('balance', data)
      dispatch({ type: GETBALANCE, payload: data });
    });

  return {
    state,
    dispatch,
    getBalance,
    setBalance,
  };
};

BalanceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BalanceProvider, useBalanceProvider };
