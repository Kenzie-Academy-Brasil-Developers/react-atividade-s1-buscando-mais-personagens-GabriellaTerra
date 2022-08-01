import {
    CardDead,
    CardDeadCharacters,
    TitleDeadCharacters,
    PhotosDeadCharacters,
    DescriptionsDead,
  } from "./CardDead";
  
  function CharCardDead({ name, status, species, gender, origin, image }) {
    return (
      <CardDead>
        <CardDeadCharacters>
          <TitleDeadCharacters> {name} </TitleDeadCharacters>
          <PhotosDeadCharacters src={image} alt="character-img" />
          <DescriptionsDead>Status:{status}</DescriptionsDead>
          <DescriptionsDead>Espécie:{species}</DescriptionsDead>
          <DescriptionsDead>Gender:{gender}</DescriptionsDead>
          <DescriptionsDead>Origem:{origin}</DescriptionsDead>
        </CardDeadCharacters>
      </CardDead>
    );
  }
  export default CharCardDead;
  
  