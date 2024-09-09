/* eslint-disable react/prop-types */
import { useState } from "react"



/*

1/ click edit button
2/ use it as a trigger for input field 
3/take the value from input field to set the player name
4/ 2 value will change/update , {useState}
5/ create toggle between (edit/save) button



 */



export default function Players({initialName , Symbol}){

    const [playerName,setPlayerName] =useState(initialName)
    const  [isEditing,setEditing] = useState(false)

function handleEdit(){


    setEditing((editing)=> !editing)


}


function handleChange(event){
    console.log(event)
    setPlayerName(event.target.value)
}


// take playername in another variable to use it in toggle between string and input field
let editablePlayerName =<span className="player-name">{playerName}</span>


if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
}



    return (
        <li className="active">
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{Symbol}</span>
          </span>
          <button onClick={handleEdit}> {isEditing ? 'save' : 'edit'} </button>
        </li>

      
    )
}