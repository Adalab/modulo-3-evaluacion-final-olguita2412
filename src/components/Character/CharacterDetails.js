import species from '../../services/species';
import '../../styles/layout/characterDetails.scss';
import { Link } from 'react-router-dom';
import status from '../../services/status';

function CharacterDetails(props) {
  

  

  
  const gender = props.data.gender === 'female' ? 'Mujer' : 'Hombre';

  const alternate_names = props.data.alternateNames.length !== 0 ? `Nombres alternativos: ${props.data.alternateNames}` : '';
  
console.log(props.data.alternateNames);
  
  return (
      <div className='characterDetails'>
        <Link to='/' className='characterDetails__link'>
          <i class="fa-solid fa-x"></i>
        </Link>
      <section className="cardDetails">
          <img className="cardDetails__img" src={props.data.photo} alt={`Foto de ${props.data.name}`} title={`Foto de ${props.data.name}`} />
          <div className='cardDetails__texts'>
            <h2 className="cardDetails__texts--title">{props.data.name}</h2>
            <p className="cardDetails__texts--description">Estatus: {status.status(props.data.gender, props.data.alive)} - {status.icon(props.data.alive)}</p>
            <p className="cardDetails__texts--description">Especie: {species.specie(props.data.species)} {species.icon(props.data.species)}</p>
            <p className="cardDetails__texts--description">Género: {gender}</p>
            <p className="cardDetails__texts--description">Casa: {props.data.house}</p>
            <p className="cardDetails__texts--description">Ancestros: {props.data.ancestry}</p>
            <p className="cardDetails__texts--description">{alternate_names}</p>
            
            </div>
            <div className={'cardDetails__house '+ props.data.house.toLowerCase()}></div>
      </section>

      
      </div>
    );
  }
  export default CharacterDetails;
  