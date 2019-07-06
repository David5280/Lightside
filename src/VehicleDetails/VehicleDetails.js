import React from 'react';
import { Link } from 'react-router-dom';

const VehicleDetails = (props) => {
  return(
    <article className='detail-card'>
      <header className='detail-header'>
      <h3>Name:  {props.name}</h3>
      <Link to='/vehicles' className='back-btn'>◀</Link>
      </header>
      <p>Model: <span className='bold'>{props.model}</span></p>
      <p>Class: <span className='bold'>{props.vehicle_class}</span></p>
      <p>Passengers: <span className='bold'>{props.passengers}</span></p>
    </article>
  )
}

export default VehicleDetails;