import React from 'react';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import NavBar from './NavBar/NavBar';
import DataContainer from './DataContainer/DataContainer';

function App() {
  return (
    <main className="App">
      <Header />
      <NavBar />
      <Aside />
      <DataContainer />
    </main>
  );
}

export default App;
