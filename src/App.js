import React, { Component } from 'react';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import NavBar from './NavBar/NavBar';
import DataContainer from './DataContainer/DataContainer';
import loadingGif from './images/r2d2loading.gif';
// import { threadId } from 'worker_threads';
// import peopleData from './mockData/peopleData';
// import filmData from './mockData/filmData';
// import vehiclesData from "./mockData/vehiclesData";
// import planetsData from './mockData/planetsData';

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
    }
  }
  
  componentDidMount() {
    this.fetchData('films');
    this.fetchData('people');
    this.fetchData('planets');
    this.fetchData('vehicles');
  }

  fetchData = (string) => {
    const data = fetch(`https://swapi.co/api/${string}/`)
      .then(res => res.json())
      .then(data => this.setState({ [string]: data.results }))
      .catch(error => this.setState({ error: error }));
      return data
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
    const targetCard = data.findIndex(card => card.name === name);
    this.setState({ favorites: [...this.state.favorites, data[targetCard]] });
  }

  render() {
    return (
      <main className="App">
      {(this.state.films.length && <Aside filmData={this.state.films} getRandomFilm={this.getRandomFilm}/>)}

        <section className='app-right-side'>

          <Header />

          <NavBar />

          {(
          (!this.state.people.length && !this.state.vehicles.length && !this.state.planets.length && !this.state.films.length) && 
          <div className='loading-container'>
            <img className='loadingGif' src={loadingGif} alt='r2d2' 
            />
          </div>
          )}

          {(
            (this.state.people.length && this.state.vehicles.length && this.state.planets.length) && 
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