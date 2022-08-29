function ButtonResset (props) {

    const handleResset = (ev) => {
        ev.preventDefault();
        props.handleRessetButton();
    }

    return (
        <button className="form__button" onClick={handleResset}>
        Limpiar filtros
      </button>
    )
}

export default ButtonResset;