import React from 'react';
import { Route } from 'react-router-dom';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import PersonDetails from '../PersonDetails/PersonDetails';
import PlanetDetails from '../PlanetDetails/PlanetDetails';
import VehicleDetails from '../VehicleDetails/VehicleDetails';


const DataContainer = ({ peopleData, vehicleData, planetData }) => {
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