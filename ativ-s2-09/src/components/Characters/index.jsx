

import CharCardAlive from "../ChardAlive";
import CharCardDead from "../ChardDead";
import  "./style.css"

function Character({ characterList }) {
  return (
    <div className="mainCards">
      
      {characterList.map((character) =>
        character.status === "Alive" ? (
          <CharCardAlive
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
          />
        ) : (
          <CharCardDead
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
          />
        )
      )}
    </div>
  );
}
export default Character;
