import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const VehicleDetails = ({ name, model, vehicle_class, passengers }) => {
  return(
    <article className='detail-card'>
      <header className='detail-header'>
      <h3>Name:  {name}</h3>
      <Link to='/vehicles' className='back-btn'>◀</Link>
      </header>
      <p>Model: <span className='bold'>{model}</span></p>
      <p>Class: <span className='bold'>{vehicle_class}</span></p>
      <p>Passengers: <span className='bold'>{passengers}</span></p>
    </article>
  )
}

VehicleDetails.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  vehicle_class: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
}

export default VehicleDetails;