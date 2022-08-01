
import './App.css';
import {useEffect, useState } from 'react';
import Character from './components/Characters';


function App() {
const [characterList , setCharacterList ] = useState([])
const [currentPage , setCurrentPage]  = useState("https://rickandmortyapi.com/api/character/")
const [nextPage, setNextPage] = useState("")
const [previousPage , setPreviousPage] = useState("")

useEffect(() => {
 fetch(currentPage)
 .then(response => response.json())
 .then(json => {
  setNextPage(json.info.next)
  console.log(json.info.next)
  setPreviousPage(json.info.prev)
  setCharacterList(json.results)})
 
},[currentPage])

function changePageNext(){
  nextPage === null ? alert("FIM !"):
    setCurrentPage(nextPage)

}


function changePagePrevious(){
  previousPage === null ? alert("ERRO X") :
  setCurrentPage(previousPage)
}


  return (
    <div className="App">
      <header> 
       <button className='previousBnt' onClick={ changePagePrevious}>Previous</button>
        <h1>Meus Personagens</h1>
        <button className='nextBnt' onClick={changePageNext}>Next</button>
      </header>
      <Character characterList={characterList}/>
    </div>
  );
}

export default App;
