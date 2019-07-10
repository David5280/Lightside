import React from 'react';
import { Route } from 'react-router-dom';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import PersonDetails from '../PersonDetails/PersonDetails';
import PlanetDetails from '../PlanetDetails/PlanetDetails';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import PropTypes from 'prop-types';
import homeimg1 from '../images/death-star.png';
import homeimg2 from '../images/millennium-falcon.png';
import homeimg3 from '../images/rebel-alliance.png';
import homeimg4 from '../images/weird-r2d2.png';
const shortid = require('shortid');

const DataContainer = ({ peopleData, vehicleData, planetData, favorites, favoriteCard }) => {
  const generatePersonCard = (person) => {
    return (
      <PeopleCard 
        personName={person.name}
        birthYear={person.birth_year}
        gender={person.gender}
        height={person.height}
        eyeColor={person.eye_color}
        isFavorite={person.isFavorite}
        key={shortid.generate()}
        id={person.id}
        favoriteCard={favoriteCard}
        /> 
    )}
  const allPeople = peopleData.map((person) => generatePersonCard(person));
  const generatePlanetCard = (planet) => {
    return (
      <PlanetCard
        planetName={planet.name}
        terrain={planet.terrain}
        diameter={planet.diameter}
        population={planet.population}
        isFavorite={planet.isFavorite}
        key={shortid.generate()}
        id={planet.id}
        favoriteCard={favoriteCard}
        />
    )}
  const allPlanets = planetData.map((planet) => generatePlanetCard(planet));
  const generateVehicleCard = (vehicle) => {
    return (
    <VehicleCard
      vehicleName={vehicle.name}
      model={vehicle.model}
      vehicleClass={vehicle.vehicle_class}
      passengers={vehicle.passengers}
      isFavorite={vehicle.isFavorite}
      key={shortid.generate()}
      id={vehicle.id}
      favoriteCard={favoriteCard}
      />
    )}
  const allVehicles = vehicleData.map(vehicle => generateVehicleCard(vehicle))
  
  const allFavorites = favorites.map(favorite => {
    if (Object.keys(favorite).includes('model')) {
      return generateVehicleCard(favorite)
    } else if (Object.keys(favorite).includes('population')) {
      return generatePlanetCard(favorite)
    } else {
      return generatePersonCard(favorite)
    }
  });

  const noFavoritesMsg = <h2>You haven't added any favorites yet!</h2>
  const favDisplay = (favorites) => {
    return favorites.length ? allFavorites : noFavoritesMsg;
  }

  const randomIndex = Math.floor(Math.random() * 4)
  const images = [homeimg1, homeimg2, homeimg3, homeimg4]
  const homeDisplay = (
    <div className='home-prompt'>
      <h2>Select a category above for more information!</h2>
      <img src={images[randomIndex]} className='home-icon' alt='star-wars-icon' />
    </div>
  )

  return (
    <section className='info-card-container'>
      <Route exact path='/' render={() => homeDisplay} />
      <Route exact path='/people' render={() => allPeople} />
      <Route exact path='/planets' render={() => allPlanets} />
      <Route exact path='/vehicles' render={() => allVehicles} />
      <Route exact path='/favorites' render={() => favDisplay(favorites)} />
      <Route path='/people/:id' render={({ match }) => {
          const { id } = match.params;
          const personFocus = peopleData.find(person => person.id === id);
          return personFocus && <PersonDetails {...personFocus} />
        }}
        />
      <Route path='/planets/:id' render={({ match }) => {
          const { id } = match.params;
          const planetFocus = planetData.find(planet => planet.id === id);
          return planetFocus && <PlanetDetails {...planetFocus} />
        }}
        />
      <Route path='/vehicles/:id' render={({ match }) => {
          const { id } = match.params;
          const vehicleFocus = vehicleData.find(vehicle => vehicle.id === id)
          return vehicleFocus && <VehicleDetails {...vehicleFocus} />
        }}
        />
    </section>
  )
}

DataContainer.propTypes = {
  peopleData: PropTypes.array.isRequired,
  vehicleData: PropTypes.array.isRequired,
  planetData: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  favoriteCard: PropTypes.func.isRequired
}

export default DataContainer;