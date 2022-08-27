import { useState, useEffect } from 'react';
import '../styles/App.scss';
import Header from './Header';
import CharacterList from './Character/CharacterList';
import CharacterDetails from './Character/CharacterDetails';
import Filter from './Filters/Filter';
import Footer from './Footer';
import getDataApi from '../services/dataAPI';
import ls from '../services/localStoraged';
import photoDefault from '../images/photoDefault.jpeg';
import React from "react";
import { Route, Routes } from 'react-router';
import { matchPath, useLocation } from 'react-router';

import MouseParticles from "react-mouse-particles";


function App() {
  const [dataCharacters, setDataCharacters] = useState(ls.get('dataCharacters', []));
  const [filterGender, setFilterGender] = useState('all');
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  
  useEffect(() => {
    getDataApi().then((result) => {
      ls.set('dataCharacters', result);
      setDataCharacters(result);
    })
  }, [])

  const handleFilterByGender = (value) => {
    setFilterGender(value);
    
  }

  const handleFilterByName = (value) => {
    setFilterName(value);
  }

  const handleFilterByHouse = (value) =>{
      setFilterHouse(value);
    
  }

  const listHouses = dataCharacters.map((characters)=> characters.house);
  const houses = listHouses.filter((house, index) => {
    return listHouses.indexOf(house) === index;
  })

  const listSpecies = dataCharacters.map((characters)=> characters.species);
  const species = listSpecies.filter((specie, index) => {
    return listSpecies.indexOf(specie) === index;
  })
  console.log(species);

  const {pathname} = useLocation();
  const dataPath = matchPath('/characterdetail/:id', pathname);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  const characterFound = dataCharacters.find((character) => character.id === characterId);

  
  return (
  <div className='page'>
    
    <Header />
    <Routes>
        <Route path="/" element={<> <Filter dataCharacters={dataCharacters} filterGender={filterGender} filterName={filterName} filterHouse={filterHouse} handleFilterByGender={handleFilterByGender} handleFilterByName={handleFilterByName} handleFilterByHouse={handleFilterByHouse} houses={houses} />
    <CharacterList dataCharacters={dataCharacters} filterGender={filterGender} filterName={filterName} filterHouse={filterHouse} /></>
        } />
        <Route path='/characterdetail/:id' element={<CharacterDetails data={characterFound} species={species} />} />
      </Routes>
   
    <Footer />
    <MouseParticles g={1} color="random" cull="col,image-wrapper"/>

  </div>);
}

export default App;
