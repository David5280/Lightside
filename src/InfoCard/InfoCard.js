import React, { Component } from 'react'

export class InfoCard extends Component {
  render() {
    const { personName, birthyear, gender, height, eyeColor, planetName, terrain, population, diameter, vehicleName, model, vehicle_class, passengers } = this.props;
    const peopleCard = (
    <article className='info-card'>
    <header className='info-card-header'>
      <h3>{personName}</h3>
      <button>Favorite</button>
    </header>
    <p>Birthyear:  <span className='bold'>{birthyear}</span></p>
    <p>Gender:  <span className='bold'>{gender}</span></p>
    <p>height:  <span className='bold'>{height}cm</span></p>
    <p>Eye Color:  <span className='bold'>{eyeColor}</span></p>
  </article>
  )
    const planetCard = (
    <article className='info-card'>
    <header className='info-card-header'>
      <h3>{planetName}</h3>
      <button>Favorite</button>
    </header>
    <p>Terrain:  <span className='bold'>{terrain}</span></p>
    <p>Population:  <span className='bold'>{population}</span></p>
    <p>Diameter:  <span className='bold'>{diameter}</span></p>
    </article>
    )
    const vehicleCard = (
      <article className='info-card'>
        <header className='info-card-header'>
          <h3>{vehicleName}</h3>
          <button>Favorite</button>
        </header>
      <p>Model:  <span className='bold'>{model}</span></p>
      <p>Class:  <span className='bold'>{vehicle_class}</span></p>
      <p>Passengers:  <span className='bold'>{passengers}</span></p>
      </article>
    )
    return (
      {peopleCard}
    )
  }
}

export default InfoCard;
