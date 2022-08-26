function FilterByName (props) {
    
    const handleFilterName = (ev) => {
       
        props.handleFilterByName(ev.target.value);
    }
    
    return (
        <>
        <label htmlFor="filterName" className="form__label display-block">Filtra por nombre</label>
        <input type="text" id="filterName" onChange={handleFilterName} value={props.filterName} className="form__input-text"/>
    </>
    )
};

export default FilterByName;