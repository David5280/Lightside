import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav>
      <NavLink to='/people' className='navlink'>
        <button 
        className='navbar-btn'
        name='allPeople'>
          People
        </button>
      </NavLink>
      <NavLink to='/planets' className='navlink'>
        <button 
        className='navbar-btn'
        name='allPlanets'>
          Planets
        </button>
      </NavLink>
      <NavLink to='/vehicles' className='navlink'>
        <button 
        className='navbar-btn'
        name='allVehicles'>
          Vehicles
        </button>
      </NavLink>
    </nav>
  )
}

export default NavBar;