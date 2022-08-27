import { Link } from "react-router-dom";
import photoDefault from '../../images/photoDefault.jpeg';
import '../../styles/layout/characterList.scss';
import species from '../../services/species';


function CharacterItem (props) {
    if (props.dataCharacters.photo === ''){
        props.dataCharacters.photo = photoDefault;
    }
    return (
        <Link to={`/characterdetail/${props.dataCharacters.name}`}>
            <li className="card">
                    <img className="card__img"
                                src={props.dataCharacters.photo}
                                alt={`Foto de ${props.dataCharacters.name}`} title={`Foto de ${props.dataCharacters.name}`} />
                    <h4 className="card__name">{props.dataCharacters.name}</h4>
                    <p className="card__specie">{species.specie(props.dataCharacters.species)} </p>
                    
         </li>
        </Link>

    );
};

export default CharacterItem;