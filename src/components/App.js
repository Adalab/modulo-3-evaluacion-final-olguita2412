import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import CharacterList from './Character/CharacterList';
import CharacterDetails from './Character/CharacterDetails';
import Filter from './Filters/Filter';
import Footer from './Footer';


function App() {
  return (
  <div>
    <Header />
    <Filter />
    <CharacterList />
    <Footer />

  </div>);
}

export default App;
