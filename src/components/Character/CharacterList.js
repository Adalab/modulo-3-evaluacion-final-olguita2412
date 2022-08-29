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
        
    });
    const renderHtml = () => {
        if (list.length > 0){
          return list.map((character, index) => {
            return (
                <CharacterItem dataCharacters={character} key={index}/>
            );    
        })  
        } return (
            <p className='textNotfound'>
              No hay ningún personaje que coincida con la palabra "{props.filterName}".
            </p>
          );
    }
    
    
    return (
        <section>
            
                <ul className="cards">
                {renderHtml()}
                </ul>
                
        </section>

    );
};

export default CharacterList;