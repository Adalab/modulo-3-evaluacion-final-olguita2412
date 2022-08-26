import { Link } from "react-router-dom";

function CharacterItem (props) {
    return (
        <Link to={`/userdetail/${props.data.id}`}>
            <li className="card">
                    <img className="card__img"
                                src={props.data.photo}
                                alt={`Foto de ${props.data.name}`} title={`Foto de ${props.data.name}`} />
                    <h4 className="card__title">{props.data.name}</h4>
                    <p className="card__description">{props.data.country}</p>
                    <p className="card__description">{props.data.age}</p>
         </li>
        </Link>

    );
};

export default CharacterItem;