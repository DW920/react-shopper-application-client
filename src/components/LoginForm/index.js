import React, { useState } from 'react';
import { useProfileProvider } from 'contexts/profile';

const Login = (props) => {
  const { history } = props;
  const { login, state: { loggedIn } } = useProfileProvider();
  const [userDetails, setUserDetails] = useState({ });

  const attemptLogin = (event) => {
    event.preventDefault();
    login(userDetails).then(() => {
      history.push('/dashboard')
    });
    
    
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
    <form className="login-form">
      <label> UserName </label>
      <input name="username" type="text" onChange={updateInput} /><br/><br/>
      <label> Password </label>
      <input name="password" type="password" onChange={updateInput} /><br/><br/>
      <button type="submit" onClick={attemptLogin}>
        Login
      </button>
      <a onClick={() => history.push('/register')} style={{ cursor: 'pointer' }}>
        ...Don't have account?
      </a>
    </form>
  );
};

export default Login;
