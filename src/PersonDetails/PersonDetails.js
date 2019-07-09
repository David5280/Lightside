import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PersonDetails = ({ name, birth_year, gender, height, eye_color }) => {
  return(
    <article className='detail-card'>
      <header className='detail-header'>
        <h3>Name:  {name}</h3>
        <Link to='/people' className='back-btn'>◀</Link>
      </header>
      <p>Birthyear: <span className='bold'>{birth_year}</span></p>
      <p>Gender: <span className='bold'>{gender}</span></p>
      <p>height: <span className='bold'>{height}cm</span></p>
      <p>Eye Color: <span className='bold'>{eye_color}</span></p>
      <p>Home World:  <span className='bold'></span></p>
    </article>
  )
}

PersonDetails.propTypes = {
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
}

export default PersonDetails;