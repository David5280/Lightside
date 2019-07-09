import React from 'react';
import { NavLink } from 'react-router-dom';
import notFavoredImg from '../images/sith.png';
import favoredImg from '../images/sith-activated.png';
import PropTypes from 'prop-types'


const PeopleCard = (props) => {
    const { personName, birthyear, gender, height, eyeColor, favoriteCard, isFavorite } = props;
    const favoritesImgs = isFavorite ? favoredImg : notFavoredImg;
    const peopleCard = (
      <article className='info-card'>
        <header className='info-card-header'>
          <h3>{personName}</h3>
          <img src={favoritesImgs} className='favorite-img' alt='fav-icon' onClick={() => favoriteCard(personName, "people")} />
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

PeopleCard.propTypes = {
  personName: PropTypes.string.isRequired,
  birthyear: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
  favoriteCard: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired
}

export default PeopleCard;
