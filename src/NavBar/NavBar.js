import React from 'react';
import r2d2 from '../images/r2d2.png'
import planet from '../images/grid-world.png'
import ship from '../images/star-wars.png'
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
        <img src={r2d2} alt='r2d2' className='nav-icon'/>
      </NavLink>
      <NavLink 
        to='/planets' 
        className='navbar-btn'
        activeClassName='activated'
      >
        Planets
        <img src={planet} alt='planet' className='nav-icon'/>
      </NavLink>
      <NavLink 
        to='/vehicles' 
        className='navbar-btn'
        activeClassName='activated'
      >
        Vehicles
        <img src={ship} alt='space-ship' className='nav-icon'/>
      </NavLink>
    </nav>
  )
}

export default NavBar;