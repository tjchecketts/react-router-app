import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}

const Navbar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    {' '}
    { isAuthenticated() ?
        <NavLink activeStyle={styles.active} to="/dashboard">Dashboard</NavLink>
        :
        <NavLink activeStyle={styles.active} to="/login">Login</NavLink>
    }
  </nav>
)

export default Navbar;