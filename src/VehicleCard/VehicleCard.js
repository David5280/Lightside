import React from 'react'

const VehicleCard = (props) => {
  const { vehicleName, model, vehicleClass, passengers } = props;
  const vehicleCard = (
  <article className='info-card'>
    <header className='info-card-header'>
      <h3>{vehicleName}</h3>
      <button>Favorite</button>
    </header>
    <p>Name: <span className='bold'>{vehicleName}</span></p>
    <p>Model: <span className='bold'>{model}</span></p>
    <p>Class: <span className='bold'>{vehicleClass}</span></p>
    <p>Passengers: <span className='bold'>{passengers}</span></p>
  </article>
  )
  return (
    vehicleCard
  )
}

export default VehicleCard;