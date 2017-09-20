import React from 'react';
import { login } from '../fakeAuth';

const Login = ({ history }) => (
  <div>
    <h1>Login</h1>
    <button onClick={ () => {
        login()
        history.push('/dashboard')
    }}>
        Login
    </button>
  </div>
)

export default Login;