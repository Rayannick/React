/* eslint-disable react/prop-types */
export default function Gameover ({name,onRestart}){
    return(
<div id="game-over">
    <h2>Game Over!!!!!!!!!
    </h2>
    
    {/* if there is winner, then show winner or else show draw */}
    
    { name && <p>{name} won!!</p>}

        {!name && <p> It is a draw</p>}
        <button onClick={onRestart}> Rematch </button>
</div>
    )
}