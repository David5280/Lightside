import React from 'react';
import { Route } from 'react-router-dom';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import PersonDetails from '../PersonDetails/PersonDetails';


const DataContainer = ({ peopleData, vehicleData, planetData }) => {
  const allPeople = peopleData.map((person, i) => {
    return (
    <PeopleCard 
      personName={person.name}
      birthyear={person.birth_year}
      gender={person.gender}
      height={person.height}
      eyeColor={person.eye_color}
      key={i}
      id={i+1}
      /> 
      )
  });
  const allPlanets = planetData.map(planet => {
    return(
      <PlanetCard
        planetName={planet.name}
        terrain={planet.terrain}
        diameter={planet.diameter}
        population={planet.population}
        key={planet.created}
        />
    )
  });
  const allVehicles = vehicleData.map(vehicle => {
    return(
      <VehicleCard
        vehicleName={vehicle.name}
        model={vehicle.model}
        vehicleClass={vehicle.vehicle_class}
        passengers={vehicle.passengers}
        key={vehicle.created}
        />
    )
  });
  const homeDisplay = <h2>Select a category above for more information!</h2>
  return (
    <section className='info-card-container'>
      <Route exact path='/' render={() => homeDisplay} />
      <Route exact path='/people' render={() => allPeople} />
      <Route exact path='/planets' render={() => allPlanets} />
      <Route exact path='/vehicles' render={() => allVehicles} />
      <Route path='/people/:id' render={({ match }) => {
          console.log(match)
          const { id } = match.params;
          console.log(id);
          const personFocus = peopleData[id-1]
          console.log(personFocus)
          return personFocus && <PersonDetails {...personFocus} />
        }}
        />
    </section>
  )
}

export default DataContainer;