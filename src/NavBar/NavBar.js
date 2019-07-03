import React from 'react';

const NavBar = () => {
  return(
    <nav>
      <button 
        className='navbar-btn'
        name='allPeople'>
          People
        </button>
      <button 
        className='navbar-btn'
        name='allPlanets'>
          Planets
        </button>
      <button 
        className='navbar-btn'
        name='allVehicles'>
          Vehicles
        </button>
    </nav>
  )
}

export default NavBar;