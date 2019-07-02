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
      people: peopleData.results,
      films: filmData.results,
      vehicles: vehiclesData.results,
      planets: planetsData.results,
      error: undefined
    }
  }

  // componentDidMount() {
  //   this.fetchPeople('')
  // }

  // fetchPeople = (url) => {
  //   const peopleData = fetch(url)
  //     .then(res => res.json())
  //     .then(data => this.setState({ people: data.results }))
  //     .then(console.log(this.state))
  //     .catch(error => this.setState({ error: error }));

  //   console.log(peopleData);
  // }

  render() {
    return (
      <main className="App">
        <Aside filmData={this.state.films} />
        <section className='app-right-side'>
          <Header />
          <NavBar />
          <DataContainer />
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