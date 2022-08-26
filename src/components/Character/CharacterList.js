import CharacterItem from './CharacterItem';

function CharacterList (props) {
    const list = props.dataCharacters
    .filter((character) => {
        if(props.filterHouse !== 'Todas'){
            return (character.house === props.filterHouse);
        } return true;
    })
    .filter ((character) => {
        if (props.filterGender !== "all"){
            return (character.gender === props.filterGender);
        } return true;
       
    })
    .filter((character) => {
        return (character.name.toLowerCase().includes(props.filterName.toLowerCase()));
    })
    .map((character, index) => {
        return (
            <CharacterItem dataCharacters={character} key={index}/>
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