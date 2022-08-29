function FilterByHouse (props) {
    
    const handleFilterHouse = (ev) => {
        ev.preventDefault();
        props.handleFilterByHouse(ev.target.value);
    }
    
    const listHouses = props.houses
    .map((house, index)=> {
        if (house === ''){
            house = 'Todas';
        }   
      return (
           <> 
           <option value={house} key={index}>{house} </option>
            </>)
       
      });
    
    return (
        <div className="form__container">
         <label htmlFor="filterHouse" className="form__label">Filtra por casa</label>
            <select className="form__input" name={props.filterHouse} id={props.filterHouse} onChange={handleFilterHouse} value={props.filterHouse} defaultValue='Gryffindor'>
                {listHouses}
            </select>

        </div>
    )
};

export default FilterByHouse;