import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav>
      <NavLink 
        to='/people' 
        className='navbar-btn'
        activeClassName='activated'
        >
        People
      </NavLink>
      <NavLink 
      to='/planets' 
      className='navbar-btn'
      activeClassName='activated'
      >
        Planets
      </NavLink>
      <NavLink 
      to='/vehicles' 
      className='navbar-btn'
      activeClassName='activated'
      >
        Vehicles
      </NavLink>
    </nav>
  )
}

export default NavBar;