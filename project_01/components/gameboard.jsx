/* eslint-disable react/prop-types */
// import { useState } from "react"



const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]





export default function GameBoard ({ onSelectSquare , turns}){
   


    let gameboard = initialGameBoard
//     const [gameboard , setGameboard] = useState(initialGameBoard)
   
//    function handleSelectSquare (rowIndex,colIndex){
//     setGameboard((prevGameBoard)=>{
//         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
//         return updatedBoard
//     })
// onSelectSquare()
//    }
   
   for (const turn of turns){
    const {square , player} = turn;
    const { row , col } = square



    gameboard[row][col] = player
   }
   
   
   
    return (




<ol id="game-board">
    { gameboard.map((row,rowIndex)=>(
        <li key={rowIndex}>
        <ol>
        
        {row.map((playerSymbol,colIndex)=>(
        
            <li key={colIndex}>

{/* trickyyyyyyyyyyyy */}
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
            </li>
        ))}
    
        </ol>
    </li>
))}
</ol>

    )
}



