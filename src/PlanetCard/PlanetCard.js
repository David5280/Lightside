import React from 'react';

const PlanetCard = (props) => {
  const { planetName, terrain, diameter, population } = props;
  const planetCard = (
  <article className='info-card'>
    <header className='info-card-header'>
      <h3>{planetName}</h3>
      <button>Favorite</button>
    </header>
    <p>Name: <span className='bold'>{planetName}</span></p>
    <p>Terrain: <span className='bold'>{terrain}</span></p>
    <p>Diameter: <span className='bold'>{diameter}km</span></p>
    <p>Population: <span className='bold'>{population}</span></p>
  </article>
  )
  return (
    planetCard
  )
}

export default PlanetCard;