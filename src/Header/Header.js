import React, { Component } from 'react'

const Header = () => {
  return (
    <header className='app-header'>
      <h1>LIGHT<span className='header-accent-color'>SIDE</span></h1>
      <button className='header-favorite-btn'>Favorites</button>
    </header>
  )
}

export default Header;
