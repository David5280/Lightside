import React from 'react';
import { Route } from 'react-router-dom';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import PersonDetails from '../PersonDetails/PersonDetails';
import PlanetDetails from '../PlanetDetails/PlanetDetails';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import homeimg1 from '../images/death-star.png';
import homeimg2 from '../images/millennium-falcon.png';
import homeimg3 from '../images/rebel-alliance.png';
import homeimg4 from '../images/weird-r2d2.png';



const DataContainer = ({ peopleData, vehicleData, planetData, favorites, favoriteCard }) => {
  
  const allPeople = peopleData.map((person, i) => {
    return (
    <PeopleCard 
      personName={person.name}
      birthyear={person.birth_year}
      gender={person.gender}
      height={person.height}
      eyeColor={person.eye_color}
      key={i+1}
      id={i+1}
      favoriteCard={favoriteCard}
      /> 
      )
  });

  const allPlanets = planetData.map((planet, i) => {
    return(
      <PlanetCard
        planetName={planet.name}
        terrain={planet.terrain}
        diameter={planet.diameter}
        population={planet.population}
        key={i+1}
        id={i+1}
        favoriteCard={favoriteCard}
        />
    )
  });

  const allVehicles = vehicleData.map((vehicle, i) => {
    return(
      <VehicleCard
        vehicleName={vehicle.name}
        model={vehicle.model}
        vehicleClass={vehicle.vehicle_class}
        passengers={vehicle.passengers}
        key={i+1}
        id={i+1}
        favoriteCard={favoriteCard}
        />
    )
  });

  const allFavorites = favorites.map((favorite, i) => {
    if (Object.keys(favorite).includes('model')) {
      return (<VehicleCard
        vehicleName={favorite.name}
        model={favorite.model}
        vehicleClass={favorite.vehicle_class}
        passengers={favorite.passengers}
        key={i+1}
        id={i+1}
        favoriteCard={favoriteCard}
      />)
    } else if (Object.keys(favorite).includes('population')) {
      return <PlanetCard
        planetName={favorite.name}
        terrain={favorite.terrain}
        diameter={favorite.diameter}
        population={favorite.population}
        key={i+1}
        id={i+1}
        favoriteCard={favoriteCard}
      />
    } else {
      return <PeopleCard
        personName={favorite.name}
        birthyear={favorite.birth_year}
        gender={favorite.gender}
        height={favorite.height}
        eyeColor={favorite.eye_color}
        key={i+1}
        id={i+1}
        favoriteCard={favoriteCard}
      /> 
    }
  });

  const noFavoritesMsg = <div><h2>there are no favorites</h2></div>
  const randomIndex = Math.floor(Math.random() * 4)
  const images = [homeimg1, homeimg2, homeimg3, homeimg4]
  const homeDisplay = 
    <div className='home-prompt'>
      <h2>Select a category above for more information!</h2>
      <img src={images[randomIndex]} className='home-icon' alt='star-wars-icon' />
    </div>
  return (
    <section className='info-card-container'>
      <Route exact path='/' render={() => homeDisplay} />
      <Route exact path='/people' render={() => allPeople} />
      <Route exact path='/planets' render={() => allPlanets} />
      <Route exact path='/vehicles' render={() => allVehicles} />
      
      
      {/* {(!favorites.length) && <Route exact path='/favorites' render={() => noFavoritesMsg} />} */}
      
      {(favorites.length) && <Route exact path='/favorites' render={() => allFavorites} />}
      
      
      <Route path='/people/:id' render={({ match }) => {
          const { id } = match.params;
          const personFocus = peopleData[id-1]
          return personFocus && <PersonDetails {...personFocus} />
        }}
        />
      <Route path='/planets/:id' render={({ match }) => {
          const { id } = match.params;
          const planetFocus = planetData[id-1]
          return planetFocus && <PlanetDetails {...planetFocus} />
        }}
        />
      <Route path='/vehicles/:id' render={({ match }) => {
          const { id } = match.params;
          const vehicleFocus = vehicleData[id-1]
          return vehicleFocus && <VehicleDetails {...vehicleFocus} />
        }}
        />
    </section>
  )
}

export default DataContainer;