/* eslint-disable react/prop-types */
export default function Gameover({winner}){
    return(
        <div id="game-over">
            <h2>GAME oVER</h2>
            {winner && <p>{winner} fucning won the battle</p>}
            {!winner && <p> it is a draw!!!!!!!!!!!!</p>    }
            <p><button>Rematch !</button></p>
        
        </div>
    )
}