import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const DataContainer = ({ peopleData, vehicleData, planetData }) => {
  const allPeople = peopleData.map(person => {
    return <InfoCard 
      personName={person.name}
      birthyear={person.birth_year}
      gender={person.gender}
      height={person.height}
      eyeColor={person.eye_color}
      />
  });
  return (
    <section className='info-card-container'>
      {/* {allPeople} */}
    </section>
  )
}

export default DataContainer;