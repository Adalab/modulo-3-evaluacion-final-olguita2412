import { Link } from "react-router-dom";
import photoDefault from '../../images/photoDefault.jpeg';

function CharacterItem (props) {
    if (props.dataCharacters.photo === ''){
        props.dataCharacters.photo = photoDefault;
    }
    return (
        <Link to={`/userdetail/${props.dataCharacters.name}`}>
            <li className="card">
                    <img className="card__img"
                                src={props.dataCharacters.photo}
                                alt={`Foto de ${props.dataCharacters.name}`} title={`Foto de ${props.dataCharacters.name}`} />
                    <h4 className="card__title">{props.dataCharacters.name}</h4>
                    <p className="card__description">{props.dataCharacters.species}</p>
                    
         </li>
        </Link>

    );
};

export default CharacterItem;