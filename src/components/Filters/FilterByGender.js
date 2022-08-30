import PropTypes from 'prop-types';


function FilterByGender (props) {
    
    const handleFilterByGender = (ev) => {
        ev.preventDefault();
        props.handleFilterByGender(ev.target.value);
    }
    
    
    return(
        <div className="form__container gender">
            <label htmlFor="filterGender" className="form__label">Filtra por género</label>
            <select className="form__input" name="gender" id="gender" onChange={handleFilterByGender} value={props.filterGender}>
                <option value="all">Todos</option>
                <option value="female">Mujer</option>
                <option value="male">Hombre </option>
            </select>
            
        </div>
    )
};

FilterByGender.propTypes = {
    filterGender: PropTypes.string.isRequired,
    handleFilterByGender: PropTypes.func.isRequired,
  };

export default FilterByGender;