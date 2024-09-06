import { useState } from "react";
import GameBoard from "./components/gameboard";
import Player from "./components/player";






function App() {

  const [activePlayer,setActivePlayer] = useState('X')


function handleSelect(){
  setActivePlayer((current)=> current === '0'? 'X':'0')
}



  return (
    <main>
      <div id="game-container">
        <ol id="players">
    <Player name = 'PlayboY 01' symbol="X"/>
    <Player name = 'PlayboY 02' symbol="X"/>
         
        </ol>

<GameBoard onSelectSquare={handleSelect} activePlayerSymbol={activePlayer}  ></GameBoard> 
      </div>
LOG
    </main>
  );
}

export default App;
