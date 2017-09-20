import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  active: {
    textDecoration: 'underline',
    fontweight: 'bold',
    color: 'black',
  }
}

const Navbar = () => (
  <nav>
    <NavLink exact activeStyle={ styles.active }to='/'>Home</NavLink>
    {' '}
    <NavLink activeStyle={ styles.active }to='/about'>About</NavLink>
  </nav>
)

export default Navbar;