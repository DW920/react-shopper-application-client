import React, { useState, Fragment } from 'react';
import { useProfileProvider } from 'contexts/profile';
import { withRouter } from 'react-router-dom'

const Register = (props) => {
  const { history } = props;
  const { Register } = useProfileProvider();
  const [userDetails, setUserDetails] = useState({ });
  const [error, setError] = useState(false);

  const passwordValidate = () => {
    return userDetails['password'] === userDetails['repassword'];
  }

  const attemptRegister = (event) => {
    event.preventDefault();
    if( passwordValidate() ){
      Register(userDetails);
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
        <input name="firstname" type="text" onChange={updateInput} /><br/><br/>
        <label> Last Name </label>
        <input name="lastname" type="text" onChange={updateInput} /><br/><br/>
        <label>U ser Name </label>
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
