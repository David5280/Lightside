import React, { Component } from 'react';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import NavBar from './NavBar/NavBar';
import DataContainer from './DataContainer/DataContainer';
import peopleData from './mockData/peopleData';
import filmData from './mockData/filmData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      openingCrawl: undefined
    }
  }

componentDidMount() {
  const randomNumber = Math.floor(Math.random() * 7)
  const randomOpener = filmData.results.splice(randomNumber, 1)[0].opening_crawl
  this.setState({ openingCrawl: randomOpener })
}



  // componentDidMount() {
  //   this.fetchApi('https://swapi.co/api/people/');
  // }

  // fetchApi = (apiToFetch) => {
  //   fetch(apiToFetch)
  //     .then(result => result.json())
  //     .then((entries) => {
  //         console.log(entries.results)
  //         })
  //     .catch((error) => console.log(error));
  // }

  render() {
    return (
      <main className="App">
        <Aside openingCrawl={this.state.openingCrawl}/>
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
