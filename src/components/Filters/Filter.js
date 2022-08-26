import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";
import FilterByName from "./FilterByName";

function Filter (props) {
    return (
        <form action="">
            <FilterByHouse filterCountry={props.filterCountry} handleFilterByCountry={props.handleFilterByCountry} data={props.data} countries={props.countries} />
            <FilterByGender handleFilterByGender={props.handleFilterByGender} filterGender={props.filterGender}/>
            <FilterByName handleFilterByName={props.handleFilterByName} filterName={props.filterName}/>
        </form>
    )
};

export default Filter;