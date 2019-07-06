import React from 'react';
import { NavLink } from 'react-router-dom';

const PlanetCard = (props) => {
  const { planetName, terrain, diameter, population } = props;
  const planetCard = (
  <article className='info-card'>
    <header className='info-card-header'>
      <h3>{planetName}</h3>
      <button>Favorite</button>
    </header>
    <NavLink to={`/planets/${props.id}`} className='planet-card-link'>
      <p>Terrain: <span className='bold'>{terrain}</span></p>
      <p>Diameter: <span className='bold'>{diameter}km</span></p>
      <p>Population: <span className='bold'>{population}</span></p>
    </NavLink>
  </article>
  )
  return (
    planetCard
  )
}

export default PlanetCard;