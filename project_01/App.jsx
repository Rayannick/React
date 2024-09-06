import { useState } from "react";
import GameBoard from "./components/gameboard";
import Player from "./components/player";
import Log from "./components/log";






function App() {

  const [activePlayer,setActivePlayer] = useState('X')
  const [gameTurn,setGameTurn] = useState([])








function handleSelect(rowIndex,colIndex){

  setActivePlayer((current)=> (current === 'X'? '0':'X'))

  setGameTurn((prevTurn)=>{
    let currentPlayer = 'X'
    if(prevTurn.length>0 && prevTurn[0].player ==='X'){
      currentPlayer = '0'
    }

    const updateTurn =[
      {square: {row : rowIndex , col : colIndex},player : currentPlayer},...prevTurn
    
    ];


    return updateTurn
  })

}



  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
    <Player name = 'PlayboY 01' symbol="X" isActive={activePlayer === 'X'}/>
    <Player name = 'PlayboY 02' symbol="0" isActive={activePlayer === '0'}/>
         
        </ol>

<GameBoard onSelectSquare={handleSelect} turns ={gameTurn}  ></GameBoard> 
      </div>
<Log turns={gameTurn} />
    </main>
  );
}

export default App;
