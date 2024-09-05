import GameBoard from "./components/gameboard";
import Player from "./components/player";






function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
    <Player name = 'PlayboY 01' symbol="X"/>
    <Player name = 'PlayboY 02' symbol="X"/>
         
        </ol>

<GameBoard></GameBoard> 
      </div>
LOG
    </main>
  );
}

export default App;
