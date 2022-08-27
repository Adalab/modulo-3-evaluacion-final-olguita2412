import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";
import FilterByName from "./FilterByName";
import '../../styles/layout/filters.scss';

function Filter (props) {
    return (
        <form action="" className='form'>
            <FilterByName handleFilterByName={props.handleFilterByName} filterName={props.filterName}/>
            <FilterByHouse filterHouse={props.filterHouse} handleFilterByHouse={props.handleFilterByHouse} dataCharacters={props.dataCharacters} houses={props.houses}/>
            <FilterByGender handleFilterByGender={props.handleFilterByGender} filterGender={props.filterGender} />
            
        </form>
    )
};

export default Filter;