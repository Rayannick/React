// features :===============
/**
 * 1/ name edit and save
 * 2/ player change for next turn
 * 3/ log for turn history
 * 4/ win and loss decision
 * 5/ when it will draw
 * 6/ turn history save , read , write
 *
 */

import Gameboard from "./components/gameboard";
import Log from "./components/log";
import Players from "./components/players";

function App() {





















  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>

      <div id="game-container">
      <ol id="players" className="highlight-player">

       <Players initialName={'player01'} Symbol={'X'}></Players>
       <Players initialName={'player02'} Symbol= {'O'}></Players>
       </ol>
<Gameboard></Gameboard>
      </div>


    </main>
  );
}

export default App;
