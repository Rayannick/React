import { useState } from "react";
import GameBoard from "./components/gameboard";
import Player from "./components/player";
import Log from "./components/log";
import Gameover from './components/gameover'
import { WINNING_COMBINATIONS } from "./winning-combinations";



// to checking the winner, bring the main array

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

const PLAYERS = {
  X : 'Player 1',
  O : 'Player 2'
}


  function deriveActivePlayer(gameturn){
    let currentPlayer = 'X';
    if(gameturn.length> 0 && gameturn[0].player === 'X'){
      currentPlayer = '0'
    }

    return currentPlayer
  }
  function deriveGameBoard(gameTurns){
    let gameBoard  = [...initialGameBoard.map((Array)=> [...Array])]
    
      // const activePlayer = deriveActivePlayer(gameTurn)
    
    
    
         for (const turn of gameTurns){
          const {square , player} = turn;
          const { row , col } = square
      
      
      
          gameBoard[row][col] = player
         }
         return gameBoard
        }

function App() {




  //     const [gameboard , setGameboard] = useState(initialGameBoard)
     
  //    function handleSelectSquare (rowIndex,colIndex){
  //     setGameboard((prevGameBoard)=>{
  //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
  //         return updatedBoard
  //     })
  // onSelectSquare()
  //    }
     
  // const [activePlayer,setActivePlayer] = useState('X')
  const [gameTurn,setGameTurn] = useState([])
  const [players,setPlayers] = useState(PLAYERS)

function handleRestart(){
  setGameTurn([]);
}

  // symble change after turn


    function deriveWinner(gameboard,players){
     let winner;

     for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameboard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameboard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column];


      if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol=== thirdSquareSymbol ){
        winner = players[firstSquareSymbol]

      }



     }

return winner
    }




function handleSelect(rowIndex,colIndex){

  // setActivePlayer((current)=> (current === 'X'? '0':'X'))

  setGameTurn((prevTurn)=>{
    // let currentPlayer = 'X'
    // if(prevTurn.length>0 && prevTurn[0].player ==='X'){
    //   currentPlayer = '0'
    // }
    const currentPlayer = deriveActivePlayer(prevTurn)

    const updateTurn =[
      {square: {row : rowIndex , col : colIndex},player : currentPlayer},...prevTurn
    
    ];


    return updateTurn
  })

}

function handlePlayerNameChange(symbol,newName){

  setPlayers(prevPlayer => {
    return{
      ...prevPlayer,[symbol] : newName
    }
  })

}

const gameBoard = deriveGameBoard(gameTurn)
const winner = deriveWinner(gameBoard,players)
const hasDraw = gameTurn.length === 9 && !winner;
const activePlayer = deriveActivePlayer(gameTurn)



  return (



    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
    <Player name = {PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName = {handlePlayerNameChange}/>
    <Player name = {PLAYERS.O} symbol="0" isActive={activePlayer === '0'} onChangeName = {handlePlayerNameChange}/>
         
        </ol>


        {(winner || hasDraw) && <Gameover winner ={winner} onRestart={handleRestart} />}

<GameBoard onSelectSquare={handleSelect} board ={gameBoard}  ></GameBoard> 
      </div>
<Log turns={gameTurn} />
    </main>
  );
}

export default App;
