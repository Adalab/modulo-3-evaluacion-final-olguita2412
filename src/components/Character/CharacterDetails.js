function CharacterDetail(props) {
    return (
      <section className="card">
          <img className="card__img" src={props.data.photo} alt={`Foto de ${props.data.name}`} title={`Foto de ${props.data.name}`} />
          <h2 className="card__title">{props.data.name}</h2>
            <p className="card__description">{props.data.email}</p>
            <p className="card__description">{props.data.age}</p>
            <p className="card__description">{props.data.phone}</p>
            <p className="card__description">{props.data.city}</p>
            <p className="card__description">{props.data.country}</p>
            <p className="card__description">{props.data.gender}</p>
      </section>
    );
  }
  export default CharacterDetail;
  