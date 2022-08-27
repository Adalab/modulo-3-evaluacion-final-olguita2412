import CharacterItem from './CharacterItem';
import '../../styles/layout/characterList.scss';

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
        if (props.filterName !== ''){
            return (character.name.toLowerCase().includes(props.filterName));
        }return true;
        
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