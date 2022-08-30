import PropTypes from 'prop-types';

function FilterByHouse (props) {
    
    const handleFilterHouse = (ev) => {
        ev.preventDefault();
        props.handleFilterByHouse(ev.target.value);
    }
    
    return (
        <div className="form__container house">
         <label htmlFor="filterHouse" className="form__label">Filtra por casa</label>
            <select className="form__input" name='houses' id='houses' onChange={handleFilterHouse} value={props.filterHouse}>
            <option value='Gryffindor'>Gryffindor </option>
            <option value='Hufflepuff'>Hufflepuff </option>
            <option value='Ravenclaw'>Ravenclaw </option>
            <option value='Slytherin'>Slytherin </option>
            <option value='Todas'>Todas </option>
            </select>

        </div>
    )
};

FilterByHouse.propTypes = {
    houses: PropTypes.array.isRequired,
    filterHouse: PropTypes.string.isRequired,
    handleFilterByHouse: PropTypes.func.isRequired,
  };

export default FilterByHouse;