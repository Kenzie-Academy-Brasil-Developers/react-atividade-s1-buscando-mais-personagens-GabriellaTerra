
import { Card, Title , Photos ,Descriptions } from "./CardAlive"

function CharCardAlive ({name , status , species , gender , origin, image }){
    return(
       
         <Card>
         <Title> {name}</Title>
         <Photos src={image} alt="character-img" />
          <Descriptions>Status:{status}</Descriptions>
         <Descriptions>Espécie:{species}</Descriptions>
            <Descriptions>Gender:{gender}</Descriptions>
            <Descriptions>Origem:{origin}</Descriptions>
            </Card>


    )

}
export default CharCardAlive