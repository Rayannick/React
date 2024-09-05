import Player from "./components/player";






function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
    <Player name = 'PlayboY 01' symbol="X"/>
          <li>
            <span className="player">
              playerName_01
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App;
