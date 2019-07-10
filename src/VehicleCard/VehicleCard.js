import React from 'react'
import { NavLink } from 'react-router-dom';
import notFavoredImg from '../images/sith.png';
import favoredImg from '../images/sith-activated.png';
import PropTypes from 'prop-types';

const VehicleCard = (props) => {
  const { vehicleName, model, vehicleClass, passengers, favoriteCard, isFavorite } = props;
  const favoritesImgs = isFavorite ? favoredImg : notFavoredImg;
  const vehicleCard = (
  <article className='info-card'>
    <header className='info-card-header'>
      <h3>{vehicleName}</h3>
      <img src={favoritesImgs} className='favorite-img' alt='fav-icon' onClick={() => favoriteCard(vehicleName, "vehicles")} />
    </header>
    <NavLink to={`/vehicles/${props.id}`} className='vehicle-card-link'>
      <p>Model: <span className='bold'>{model}</span></p>
      <p>Class: <span className='bold'>{vehicleClass}</span></p>
      <p>Passengers: <span className='bold'>{passengers}</span></p>
    </NavLink>
  </article>
  )
  return (
    vehicleCard
  )
}

VehicleCard.propTypes = {
  vehicleName: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  vehicleClass: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  favoriteCard: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool
}

export default VehicleCard;