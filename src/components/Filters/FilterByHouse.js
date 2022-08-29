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
        <>
         <label htmlFor="filterHouse display-block">Filtra por casa</label>
            <select className="form__input-text" name={props.filterHouse} id={props.filterHouse} onChange={handleFilterHouse} value={props.filterHouse} defaultValue='Gryffindor'>
                {listHouses}
            </select>

        </>
    )
};

export default FilterByHouse;