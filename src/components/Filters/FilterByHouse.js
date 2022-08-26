function FilterByHouse (props) {
    
    const handleFilterCountry = (ev) => {
        props.handleFilterByCountry(ev.target.value);
    }
    
    const listCountries = props.countries
    .map((country, index)=> {
        
      return (
           <> 
           <li key={index}>
            <label className="display-block" htmlFor={country}>
            <input type="checkbox" name={country} id={country} value={country} onChange={handleFilterCountry} />{country}</label> 
           </li>
            </>)
       
      });
    
    return (
        <>
            <label class="form__label display-block" htmlFor="country">Filtra por país:</label>
            <ul className="country">
            {listCountries}
            </ul>
        </>
    )
};

export default FilterByHouse;