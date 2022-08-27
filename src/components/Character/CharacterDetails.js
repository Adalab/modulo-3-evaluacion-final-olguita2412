import species from '../../services/species';
import {emojify} from 'react-emojione';

function CharacterDetails(props) {
  
  if (props.data.gender === 'female'){
    props.data.gender = 'Mujer';
    props.data.alive = props.data.alive ? 'Viva' : 'Muerta';

   
    
  }else if(props.data.gender === 'male'){
    props.data.gender = 'Hombre';
    props.data.alive = props.data.alive ? 'Vivo' : 'Muerto';
   
    
  }
  
  console.log(species.icon(props.data.species));
  
  return (
      <section className="card">
          <img className="card__img" src={props.data.photo} alt={`Foto de ${props.data.name}`} title={`Foto de ${props.data.name}`} />
          <h2 className="card__title">{props.data.name}</h2>
            <p className="card__description">Estatus: {props.data.alive} </p>
            <p className="card__description">Especie: {species.specie(props.data.species)} {species.icon(props.data.species)}</p>
            <p className="card__description">Género: {props.data.gender}</p>
            <p className="card__description">Casa: {props.data.house}</p>
            <p className="card__description">Nombres alternativos: {props.data.alternate_names}</p>
            <p className="card__description">Ancestros: {props.data.ancestry}</p>
      </section>
    );
  }
  export default CharacterDetails;
  