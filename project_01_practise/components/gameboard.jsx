
 /*
 
 1.place the board
 2. when clicked on board , change the mark
 3. every turn is recorded in an array
 4. disabled the button after click.
 5. display the changed gameboard(useStare)
 6. decide the winner

 
 
 */
  
  const INITIAL_GAME_BOARD = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33],
  ];
  
  
import { useState } from "react";
import Log from "./log";
import {WINNING_COMBINATIONS} from '../winning-combination';
import Gameover from "./gameover";

const PLAYERS = {
  X : 'player 1',
  Y : 'player 2'
}


export default function Gameboard(){
    const [player,setPlayer] =  useState(PLAYERS)
  const [gameTurn , setGameTurn] = useState([]);



  function handleNameChange (symbol,newName){
    setPlayer((prevplay)=> {
      return {
        ...prevplay,[symbol] : newName
      }
    })
  }


function deriveGameBoard (turns){

  let gameBoard = [...INITIAL_GAME_BOARD].map((array)=> [...array])
  
  for(const turn of turns){
    const {square , player}= turn
 
    const {row,col} = square;

    gameBoard [row][col]=player

  }

  return gameBoard;

}


const gameBoarda =deriveGameBoard(gameTurn)


console.log(gameBoarda)
console.log(gameTurn , 'this is game turn')




function deriveActivePlayer(gameTurn){

  let currentPlayer = 'X'
if(gameTurn.length> 0 && gameTurn[0].player === 'X'){
  currentPlayer = '0'
}

return currentPlayer;
}
  

  function onselectSquare (rI,cI) {
    setGameTurn((prev)=> {
      const currentPlayer = deriveActivePlayer(prev);
      const updateTurns = [{square : {row: rI,col: cI},player : currentPlayer},...prev];
    
    return updateTurns;
    
    } )
  }

  
  
  
  // for(const board of INITIAL_GAME_BOARD){

  //   console.log(board)
  //   for (const dice of board){
  //     console.log(dice)
  //   }
    
  //               }
  
  // console.log(INITIAL_GAME_BOARD[1][1])


  // console.log(gameboard[0].square)
  // console.log(gameboard[0].player)

function deriveWinner(gameBoarda,player){
  
  let winner;
  for (const combination of WINNING_COMBINATIONS){

    const firstsymbol = gameBoarda[combination[0].row][combination[0].col];
    const secondsymbol = gameBoarda[combination[1].row][combination[1].col];
    const thirdsymbol = gameBoarda[combination[2].row][combination[2].col];
    
    if(firstsymbol === secondsymbol && firstsymbol=== thirdsymbol && firstsymbol){
      winner = player[firstsymbol];
    }
  } 
  
  
  
  return winner
}
      
const winner =  deriveWinner(gameBoarda,player)
const hasDraw = gameTurn.length ===9 && !winner

  function handleRestart(){
    setGameTurn([])
  }
  
  return (
        <ol id="game-board">
      
            {
              gameBoarda.map((row,rowIndex)=>(
                <li key={rowIndex}>
                  <ol>
                    {row.map((playerSymbol,colIndex)=>(
                      <li key={colIndex}>
                        {/* we need rowIndex/calIndex, because we can update the value of the array */}
                        <button onClick={()=> onselectSquare(rowIndex,colIndex)} disabled = {typeof(playerSymbol) !== 'number'}> {playerSymbol}</button>
                      </li>
                    ))}
                  </ol>
                </li>
              ))
            }
     {(winner || hasDraw ) && (
        <Gameover name={winner} onRestart={handleRestart}/>
      )}
<Log turns = {gameTurn} />
      </ol>
 
    )
}