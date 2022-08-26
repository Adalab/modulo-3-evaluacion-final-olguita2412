function FilterByGender (props) {
    
    const handleFilterByGender = (ev) => {
        props.handleFilterByGender(ev.target.value);
    }
    
    return(
        <>
            <label htmlFor="filterGender display-block">Filtra por género</label>
            <select className="form__input-text" name="gender" id="gender" onChange={handleFilterByGender} value={props.filterGender}>
                <option value="all" selected>Todos</option>
                <option value="female">Mujer</option>
                <option value="male">Hombre </option>
                <option value="no-binary">No binario</option>
            </select>
            
        </>
    )
};

export default FilterByGender;