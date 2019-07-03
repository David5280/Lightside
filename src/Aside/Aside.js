import React, { Component } from 'react';

const Aside = ({ filmData, getRandomFilm }) => {
  const randomNumber = Math.floor(Math.random() * 7)
  const randomFilm = filmData.slice().splice(randomNumber, 1);
  return (
    <aside>
      <p className='aside-opening-crawl'>{randomFilm[0].opening_crawl}</p> 
      <p className='aside-film-title'>{randomFilm[0].title}</p>
      <p className='aside-film-date'>{randomFilm[0].release_date}</p>
    </aside>
  )
}

export default Aside;
