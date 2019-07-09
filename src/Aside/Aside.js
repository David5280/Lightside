import React from 'react';
import PropTypes from 'prop-types';

const Aside = ({ filmData, getRandomFilm }) => {
  const randomFilm = getRandomFilm(filmData);
  return (
    <aside>
      <p className='aside-opening-crawl'>{randomFilm[0].opening_crawl}</p> 
      <p className='aside-film-title'>{randomFilm[0].title}</p>
      <p className='aside-film-date'>{randomFilm[0].release_date}</p>
    </aside>
  )
}

Aside.propTypes = {
  filmData: PropTypes.array.isRequired,
  getRandomFilm: PropTypes.func.isRequired,
}

export default Aside;
