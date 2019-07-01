import React, { Component } from 'react'

export class InfoCard extends Component {
  render() {
    return (
      <article className='info-card'>
        <header className='info-card-header'>
          <h3>Name</h3>
          <button>Favorite</button>
        </header>
        <p>Homeworld:  </p>
        <p>Species:  </p>
        <p>Language:  </p>
        <p>Population:  </p>
      </article>
    )
  }
}

export default InfoCard;
