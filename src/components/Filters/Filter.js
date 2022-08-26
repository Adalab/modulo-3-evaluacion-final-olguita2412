import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";
import FilterByName from "./FilterByName";

function Filter (props) {
    return (
        <form action="">
            <FilterByHouse filterHouse={props.filterHouse} handleFilterByHouse={props.handleFilterByHouse} dataCharacters={props.dataCharacters} houses={props.houses}/>
            <FilterByGender handleFilterByGender={props.handleFilterByGender} filterGender={props.filterGender} />
            <FilterByName handleFilterByName={props.handleFilterByName} filterName={props.filterName}/>
        </form>
    )
};

export default Filter;