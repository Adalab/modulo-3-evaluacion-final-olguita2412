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

  

  
  return (
  <div>
    <MouseParticles
          g={3}
          color="random"
          cull="MuiSvgIcon-root,MuiButton-root"
          level={9}
        />
    <Header />
    <Filter dataCharacters={dataCharacters} filterGender={filterGender} filterName={filterName} filterHouse={filterHouse} handleFilterByGender={handleFilterByGender} handleFilterByName={handleFilterByName} handleFilterByHouse={handleFilterByHouse} houses={houses} />
    <CharacterList dataCharacters={dataCharacters} filterGender={filterGender} filterName={filterName} filterHouse={filterHouse} />
    <Footer />

  </div>);
}

export default App;
