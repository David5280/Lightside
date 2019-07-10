import React from 'react';
import { NavLink } from 'react-router-dom';
import notFavoredImg from '../images/sith.png';
import favoredImg from '../images/sith-activated.png';
import PropTypes from 'prop-types';

const PlanetCard = (props) => {
  const { planetName, terrain, diameter, population, favoriteCard, isFavorite } = props;
  const favoritesImgs = isFavorite ? favoredImg : notFavoredImg;
  const planetCard = (
  <article className='info-card'>
    <header className='info-card-header'>
      <h3>{planetName}</h3>
      <img src={favoritesImgs} className='favorite-img' alt='fav-icon' onClick={() => favoriteCard(planetName, "planets")} />
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

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  favoriteCard: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool
}

export default PlanetCard;