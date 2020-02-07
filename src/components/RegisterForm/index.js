import React, { useState, Fragment } from 'react';
import { useProfileProvider } from 'contexts/profile';
import { withRouter } from 'react-router-dom'
import cookie from 'react-cookies'
import { useBalanceProvider } from 'contexts/balance';
import { useCartProvider } from 'contexts/cart';

const Register = (props) => {
  const { history, cookies } = props;
  const { register } = useProfileProvider();
  const { getBalance } = useBalanceProvider();
  const { getItems } = useCartProvider();
  const [userDetails, setUserDetails] = useState({ });
  const [error, setError] = useState(false);

  const passwordValidate = () => {
    return userDetails['password'] === userDetails['repassword'];
  }

  const attemptRegister = (event) => {
    event.preventDefault();
    if( passwordValidate() ){
      register(userDetails).then(() => {
        getBalance()
        getItems()
        history.push('/dashboard')
      });
    } else {
      setError(({ error: true }))
    }
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
    setUserDetails(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    
      
      <form className="Register-form">
      <h1>Create Account</h1>
        <label> First Name </label>
        <input name="firstName" type="text" onChange={updateInput} /><br/><br/>
        <label> Last Name </label>
        <input name="lastName" type="text" onChange={updateInput} /><br/><br/>
        <label>User Name </label>
        <input name="username" type="text" onChange={updateInput} /><br/><br/>
        <label> Password </label>
        <input name="password" type="password" onChange={updateInput} /><br/><br/>
        <label> Confirm </label>
        <input name="repassword" type="password" onChange={updateInput} /><br/><br/>
        <label>{error && "password mismatch"}</label><br/>
        <button type="submit" onClick={attemptRegister} onChange={updateInput}>
          Register
        </button>
        <a onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
          ...Already have an account?
        </a>
      </form>
    
  );
};

export default withRouter(Register);
