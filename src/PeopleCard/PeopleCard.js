import React from 'react';
import { NavLink } from 'react-router-dom';


const PeopleCard = (props) => {
    const { personName, birthyear, gender, height, eyeColor } = props;
    const peopleCard = (
      <article className='info-card'>
        <header className='info-card-header'>
          <h3>{personName}</h3>
          <button>Favorite</button>
        </header>
        <NavLink to={`/people/${props.id}`} className='person-card-link'>
          <p>Birthyear: <span className='bold'>{birthyear}</span></p>
          <p>Gender: <span className='bold'>{gender}</span></p>
          <p>height: <span className='bold'>{height}cm</span></p>
          <p>Eye Color: <span className='bold'>{eyeColor}</span></p>
        </NavLink>
      </article>
    )
    return (
      peopleCard
    )
}

export default PeopleCard;
