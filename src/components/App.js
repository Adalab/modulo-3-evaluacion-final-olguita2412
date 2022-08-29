import { useState, useEffect } from 'react';
import '../styles/App.scss';
import Header from './Header';
import CharacterList from './Character/CharacterList';
import CharacterDetails from './Character/CharacterDetails';
import Filter from './Filters/Filter';
import Footer from './Footer';
import getDataApi from '../services/dataAPI';
import ls from '../services/localStoraged';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import MouseParticles from "react-mouse-particles";
import Loading from './Loading';


function App() {
  const [dataCharacters, setDataCharacters] = useState(ls.get('dataCharacters', []));
  const [filterGender, setFilterGender] = useState('all');
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  const [filterAncestry, setFilterAncestry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  
  useEffect(() => {
    getDataApi().then((result) => {
      ls.set('dataCharacters', result);
      setIsLoading(false);
      setDataCharacters(result.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }));
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
  

  const handleFilterByAncestry = (value) =>{
    if (value !== ''){
      if (filterAncestry.includes(value)){
        const index = filterAncestry.indexOf(value);
        filterAncestry.splice(index, 1);
        return setFilterAncestry([...filterAncestry]);
      }
      return setFilterAncestry([...filterAncestry, value]);
    } return setFilterAncestry('');
    
  }

  const handleRessetButton = () =>{
    setFilterAncestry([]);
    setFilterHouse('Gryffindor');
    setFilterGender('all');
    setFilterName('');
  }
  

  const listHouses = dataCharacters.map((characters)=> characters.house);
  const houses = listHouses.filter((house, index) => {
    return listHouses.indexOf(house) === index;
  })

  const listSpecies = dataCharacters.map((characters)=> characters.species);
  const species = listSpecies.filter((specie, index) => {
    return listSpecies.indexOf(specie) === index;
  })

  const listGender = dataCharacters.map((characters)=> characters.gender);
  const gender = listGender.filter((gender, index) => {
    return listGender.indexOf(gender) === index;
  })

  const listAncestry = dataCharacters.map((characters)=> characters.ancestry);
  const ancestry = listAncestry.filter((ancestry, index) => {
    if (ancestry !== ''){
      return listAncestry.indexOf(ancestry) === index;
    }
  })

  

  const {pathname} = useLocation();
  const dataPath = matchPath('/characterdetail/:id', pathname);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  const characterFound = dataCharacters.find((character) => character.id === characterId);

  
  return (
  <div className='page'>
    
    <Header />
    <main className='main'>
    <Loading isLoading={isLoading}/>
    <Routes>
        <Route path="/" element={<> <Filter  dataCharacters={dataCharacters} filterGender={filterGender} filterName={filterName} filterHouse={filterHouse} filterAncestry={filterAncestry} handleFilterByGender={handleFilterByGender} handleFilterByName={handleFilterByName} handleFilterByHouse={handleFilterByHouse} handleFilterByAncestry={handleFilterByAncestry} houses={houses} gender={gender} ancestry={ancestry} handleRessetButton={handleRessetButton}/>
        <CharacterList dataCharacters={dataCharacters} filterGender={filterGender} filterName={filterName} filterHouse={filterHouse} filterAncestry={filterAncestry} /></>
        } />
        <Route path='/characterdetail/:id' element={<CharacterDetails character={characterFound} species={species} />} />
    </Routes>
    </main>
    <Footer />
    <MouseParticles g={1} color="random" cull="col,image-wrapper"/>

  </div>);
}

export default App;
