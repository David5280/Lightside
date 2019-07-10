import React, { Component } from 'react';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import NavBar from './NavBar/NavBar';
import DataContainer from './DataContainer/DataContainer';
import loadingGif from './images/r2d2loading.gif';
import { fetchData } from './apicalls/apicalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      films: [],
      vehicles: [],
      planets: [],
      error: undefined,
      favorites: [],
      randomFilm: undefined
    }
  }
  
  componentDidMount() {
    fetchData('films')
      .then(results => this.setState({ films: results }))
      .catch(error => this.setState({ error: error }));
    fetchData('people')
      .then(results => this.setState({ people: results }))
      .catch(error => this.setState({ error: error }));
    fetchData('planets')
      .then(results => this.setState({ planets: results }))
      .catch(error => this.setState({ error: error }));
    fetchData('vehicles')
      .then(results => this.setState({ vehicles: results }))
      .catch(error => this.setState({ error: error }));
  }

  favoriteCard = (name, cardType) => {
    if (cardType === 'people') {
      this.findTargetCard(name, this.state.people);
    } else if (cardType === 'planets') {
      this.findTargetCard(name, this.state.planets);
    } else {
      this.findTargetCard(name, this.state.vehicles);
    }
  }

  findTargetCard = (name, data) => {
    const targetCardIndex = data.findIndex(card => card.name === name);
    const targetCard = data[targetCardIndex];
    targetCard.isFavorite = !targetCard.isFavorite;
    if (this.state.favorites.includes(targetCard)) {
      const updatedFavorites = this.state.favorites.filter(favorite => {
        return favorite !== targetCard;
      })
      this.setState({ favorites: updatedFavorites })
    } else {
      this.setState({ favorites: [...this.state.favorites, targetCard] });
    }
  }

  getRandomFilm = (filmData) => {
    const randomNumber = Math.floor(Math.random() * 7);
    const randomFilm = filmData.slice().splice(randomNumber, 1);
    if (this.state.randomFilm === undefined) {
      this.setState({ randomFilm: randomFilm });
      return randomFilm;
    } else {
      return this.state.randomFilm;
    }
  }

  render() {
    return (
      <main className="App">
      {(this.state.films.length && <Aside filmData={this.state.films} getRandomFilm={this.getRandomFilm}/>)}

        <section className='app-right-side'>

          <Header favoritesLength={this.state.favorites.length}/>

          <NavBar />

          {(
          (!this.state.people.length && 
            !this.state.vehicles.length && 
            !this.state.planets.length && 
            !this.state.films.length) && 
          <div className='loading-container'>
            <img 
              className='loadingGif' 
              src={loadingGif} 
              alt='r2d2' 
              />
          </div>
          )}

          {(
            (this.state.people.length && 
              this.state.vehicles.length && 
              this.state.planets.length) && 
          <DataContainer 
            peopleData={this.state.people} 
            vehicleData={this.state.vehicles} 
            planetData={this.state.planets}
            favorites={this.state.favorites}
            favoriteCard={this.favoriteCard}
          />
          )}

        </section>
        
      </main>
    );
  }
}

export default App;