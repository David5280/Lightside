import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlanetDetails = ({ name, terrain, diameter, population }) => {
  return(
    <article className='detail-card'>
      <header className='detail-header'>
        <h3>Name:  {name}</h3>
        <Link to='/planets' className='back-btn'>◀</Link>
      </header>
      <p>Terrain: <span className='bold'>{terrain}</span></p>
      <p>Diameter: <span className='bold'>{diameter}km</span></p>
      <p>Population: <span className='bold'>{population}</span></p>
    </article>
  )
}

PlanetDetails.propTypes = {
  name: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
}

export default PlanetDetails;