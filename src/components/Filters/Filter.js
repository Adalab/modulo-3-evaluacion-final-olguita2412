import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";
import FilterByName from "./FilterByName";
import FilterByAncestry from "./FilterByAncestry";
import ButtonResset from "./ButtonResset";
import '../../styles/layout/filters.scss';

function Filter (props) {
    
    const handleForm = (ev) => {
        ev.preventDefault();
    }
    
    return (
        <form action="" className='form'onSubmit={handleForm}>
            <FilterByHouse filterHouse={props.filterHouse} handleFilterByHouse={props.handleFilterByHouse} dataCharacters={props.dataCharacters} houses={props.houses}/>
            <FilterByName handleFilterByName={props.handleFilterByName} filterName={props.filterName}/>
            <FilterByGender handleFilterByGender={props.handleFilterByGender} filterGender={props.filterGender} dataCharacters={props.dataCharacters}/>
            <FilterByAncestry handleFilterByAncestry={props.handleFilterByAncestry} filterAncestry={props.filterAncestry} ancestry={props.ancestry} />
            <ButtonResset handleRessetButton={props.handleRessetButton} />
            
        </form>
    )
};

export default Filter;