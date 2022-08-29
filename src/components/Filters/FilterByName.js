function FilterByName (props) {
    
    const handleFilterName = (ev) => {
        ev.preventDefault();
        props.handleFilterByName(ev.target.value.toLowerCase());
    }
    
    return (
        <div className="form__container">
        <label htmlFor="filterName" className="form__label">Filtra por nombre</label>
        <input type="text" id="filterName" onChange={handleFilterName} value={props.filterName} className="form__input"/>
    </div>
    )
};

export default FilterByName;