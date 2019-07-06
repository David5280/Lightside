import React from 'react';
import { Link } from 'react-router-dom';

const PersonDetails = (props) => {
  console.log(props);
  return(
    <article className='detail-card'>
      <header className='detail-header'>
        <h3>Name:  {props.name}</h3>
        <Link to='/people' className='back-btn'>◀</Link>
      </header>
      <p>Birthyear: <span className='bold'>{props.birth_year}</span></p>
      <p>Gender: <span className='bold'>{props.gender}</span></p>
      <p>height: <span className='bold'>{props.height}cm</span></p>
      <p>Eye Color: <span className='bold'>{props.eye_color}</span></p>
      <p>Home World:  <span className='bold'></span></p>
    </article>
  )
}

export default PersonDetails;