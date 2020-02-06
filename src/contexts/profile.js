import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useReducer, useContext } from 'react';

const initialState = { loggedIn: false, name: {} };
const store = createContext(initialState);
const { Provider } = store;

const BASE_URL = 'http://localhost:5000/api';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    const { type, payload } = action;

    switch (type) {
      case LOGIN: {
        // Store the profile data in the state
        return { ...prevState, loggedIn: true, ...payload };
      }
      case LOGOUT: {
        // Reset state to logged out
        return initialState;
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useProfileProvider = () => {
  const { state, dispatch } = useContext(store);

  const login = credentials => axios
    .post(`${BASE_URL}/login`, credentials)
    .then(({ data }) => {
      dispatch({ type: LOGIN, payload: data });
    });

  const logout = () => dispatch({
    type: LOGOUT,
  });


  return {
    state,
    dispatch,
    login,
    logout,
  };
};

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProfileProvider, useProfileProvider };
