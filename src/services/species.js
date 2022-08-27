import {emojify} from 'react-emojione';


const iconSpecies = (specie) => {
    if (specie === 'human'){
      return emojify(' 🧑');
    }
    if (specie === "half-giant"){
        return emojify(' 🧑x2/🧑');
    }
    if (specie ==="werewolf"){
        return emojify('🐺 ');
    }
    if (specie === "cat"){
        return emojify('🐱 ');
    }
    if (specie === "goblin"){
        return emojify('🧙🏼‍♂️ ');
    }
    if (specie ==="owl"){
        return emojify('🦉 ');
    }
    if (specie ==="ghost"){
        return emojify('👻 ');
    }
    if (specie ==="poltergeist"){
        return emojify('👽 ');
    }
    if (specie ==="three-headed dog"){
        return emojify('🐶 ');
    }
    if (specie ==="dragon"){
        return emojify('🐉 ');
    }
    if (specie ==="centaur"){
        return emojify('🐐 ');
    }
    if (specie ==="house-elf"){
        return emojify('🧝🏼‍♂️ ');
    }
    if (specie ==="acromantula"){
        return emojify('🕷 ');
    }
    if (specie ==="hippogriff"){
        return emojify('🦄 ');
    }
    if (specie ==="giant"){
        return emojify(' 🧑x2');
    }
    if (specie ==="vampire"){
        return emojify(' 🧛🏼‍♂️ ');
    }
    if (specie ==="half-human"){
        return emojify('🧙‍♂️/ 🧑');
    }
  }

const species = (specie) => {
    if (specie === "human"){
       return specie = "Humano";
    }
    if (specie === "half-giant"){
        return specie ='Medio gigante';
    }
    if (specie ==="werewolf"){
        return specie ='Hombre lobo';
    }
    if (specie === "cat"){
        return specie ='Gato';
    }
    if (specie === "goblin"){
        return specie ='Duende';
    }
    if (specie ==="owl"){
        return specie ='Búho';
    }
    if (specie ==="ghost"){
        return specie ='Fantasma';
    }
    if (specie ==="poltergeist"){
        return specie ='Duende/Fantasma';
    }
    if (specie ==="three-headed dog"){
        return specie ='Perro de tres cabezas';
    }
    if (specie ==="dragon"){
        return specie ='Dragón';
    }
    if (specie ==="centaur"){
        return specie ='Centauro';
    }
    if (specie ==="house-elf"){
        return specie ='Elfo doméstico';
    }
    if (specie ==="acromantula"){
        return specie ='Acromántula';
    }
    if (specie ==="hippogriff"){
        return specie ='Hipogrifo';
    }
    if (specie ==="giant"){
        return specie ='Gigante';
    }
    if (specie ==="vampire"){
        return specie ='Vampiro';
    }
    if (specie ==="half-human"){
        return specie ='Medio humano';
    }
      
}
  

  const objectToExport = {
    specie: species,
    icon: iconSpecies,
  };
  
  // Exportamos el objeto para que pueda ser usado desde App
  export default objectToExport;