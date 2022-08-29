function FilterByGender (props) {
    
    const handleFilterByGender = (ev) => {
        ev.preventDefault();
        props.handleFilterByGender(ev.target.value);
    }
    
    
    return(
        <div className="form__container">
            <label htmlFor="filterGender" className="form__label">Filtra por género</label>
            <select className="form__input" name="gender" id="gender" onChange={handleFilterByGender} value={props.filterGender} defaultValue='all'>
                <option value="all" selected>Todos</option>
                <option value="female">Mujer</option>
                <option value="male">Hombre </option>
            </select>
            
        </div>
    )
};

export default FilterByGender;