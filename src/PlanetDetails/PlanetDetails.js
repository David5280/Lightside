import React from 'react';
import { Link } from 'react-router-dom';

const PlanetDetails = (props) => {
  console.log(props);
  return(
    <article className='detail-card'>
      <header className='detail-header'>
        <h3>Name:  {props.name}</h3>
        <Link to='/planets' className='back-btn'>◀</Link>
      </header>
      <p>Terrain: <span className='bold'>{props.terrain}</span></p>
      <p>Diameter: <span className='bold'>{props.diameter}km</span></p>
      <p>Population: <span className='bold'>{props.population}</span></p>
    </article>
  )
}

export default PlanetDetails;