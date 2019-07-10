import PropTypes from 'prop-types';
const shortid = require('shortid'); 

const cleaner = (data, string) => {
  if (string === 'people') {
    return data.map(person => {
      return {
        name: person.name,
        height: person.height,
        birth_year: person.birth_year,
        eye_color: person.eye_color,
        gender: person.gender,
        isFavorite: false,
        id: shortid.generate()
      }
    })
  } else if (string === 'films') {
    return data.map(film => {
      return {
        opening_crawl: film.opening_crawl,
        release_date: film.release_date,
        title: film.title,
      }
    })
  } else if (string === 'vehicles') {
    return data.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        vehicle_class: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        isFavorite: false,
        id: shortid.generate()
      }
    })
  } else {
    return data.map(planet => {
      return {
        name: planet.name,
        terrain: planet.terrain,
        diameter: planet.diameter,
        population: planet.population,
        isFavorite: false,
        id: shortid.generate()
      }
    })
  }
}

cleaner.propTypes = {
  data: PropTypes.array.isRequired,
  string: PropTypes.string.isRequired
}

export default cleaner;