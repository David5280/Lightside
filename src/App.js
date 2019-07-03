import React, { Component } from 'react';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import NavBar from './NavBar/NavBar';
import DataContainer from './DataContainer/DataContainer';
import peopleData from './mockData/peopleData';
import filmData from './mockData/filmData';
import vehiclesData from "./mockData/vehiclesData";
import planetsData from './mockData/planetsData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      films: [],
      vehicles: [],
      planets: [],
      error: undefined
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

  render() {
    return (
      <main className="App">
        {(this.state.films.length && <Aside filmData={this.state.films} getRandomFilm={this.getRandomFilm}/>)}
        <section className='app-right-side'>
          <Header />
          <NavBar />
          {(
            (this.state.people.length && this.state.vehicles.length && this.state.planets.length) && 
          <DataContainer 
            peopleData={this.state.people} 
            vehicleData={this.state.vehicles} 
            planetData={this.state.planets}
            />
            )}
        </section>
      </main>
    );
  }
}

export default App;



// get random crawl
  // const randomNumber = Math.floor(Math.random() * 7)
  // const randomOpener = filmData.results.splice(randomNumber, 1)[0].opening_crawl
  // this.setState({ openingCrawl: randomOpener })