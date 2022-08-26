import CharacterItem from './CharacterItem';

function CharacterList (props) {
    const list = props.data
    .filter((user) => {
        if(props.filterCountry.length !== 0){
            return (props.filterCountry.includes(user.country));
        } return true;
    })
    .filter ((user) => {
        if (props.filterGender !== "all"){
            return (user.gender === props.filterGender);
        } return true;
       
    })
    .filter((user) => {
        return (user.name.toLowerCase().includes(props.filterName.toLowerCase()));
    })
    .map((user) => {
        return (
            <CharacterItem data={user} key={user.id}/>
        )
    })
    
    return (
        <section>
            
                <ul className="cards">
                {list}
                    

                </ul>
        </section>

    );
};

export default CharacterList;