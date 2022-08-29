import species from '../../services/species';
import '../../styles/layout/characterDetails.scss';
import { Link } from 'react-router-dom';
import status from '../../services/status';

function CharacterDetails(props) {
  if (props.character === undefined) {
    return (<p className='notFoundText'>El personaje que buscas no existe</p>);
  } 
  const gender = props.character.gender === 'female' ? 'Mujer' : 'Hombre';

  const alternate_names = props.character.alternateNames.length !== 0 ? `Nombres alternativos: ${props.character.alternateNames}` : '';

 const renderCharacterDetails = () => {
  
    return (
    <div className='characterDetails'>
      <Link to='/' className='characterDetails__link'>
        <i className="fa-solid fa-x"></i>
     </Link>
      <section className="cardDetails">
        <img className="cardDetails__img" src={props.character.photo} alt={`Foto de ${props.character.name}`} title={`Foto de ${props.character.name}`} />
        <div className='cardDetails__texts'>
          <h2 className="cardDetails__texts--title">{props.character.name}</h2>
          <p className="cardDetails__texts--description">Estatus: {status.status(props.character.gender, props.character.alive)} - {status.icon(props.character.alive)}</p>
          <p className="cardDetails__texts--description">Especie: {species.specie(props.character.species)} {species.icon(props.character.species)}</p>
          <p className="cardDetails__texts--description">Género: {gender}</p>
          <p className="cardDetails__texts--description">Casa: {props.character.house}</p>
          <p className="cardDetails__texts--description">Ancestros: {props.character.ancestry}</p>
          <p className="cardDetails__texts--description">{alternate_names}</p>
        
        </div>
        <div className={'cardDetails__house '+ props.character.house.toLowerCase()}></div>
  </section> 
  </div>)
}

  
  return (
    renderCharacterDetails()
      
    );
  }
  export default CharacterDetails;
  