/* eslint-disable react/prop-types */

import { useState } from "react"



export default function Player( {name , symbol , isActive,onChangeName}){


    const [ isEditing , setEditing ] = useState( false)
    const [ playerName , setPlayerName ] = useState(name)
function checking_clicking(){
   setEditing((editing)=> !editing)

   
   if(isEditing){
    onChangeName(symbol,playerName)
   }
}

function handleChange(event){
    setPlayerName(event.target.value)
}
    
let editingName = <span className="player-name">{playerName}</span>

if(isEditing){
     editingName = <input type="text" value={playerName} onChange={handleChange} required/> 
}


    return(
        <>
         <li className={isActive? 'active' : undefined}>
            <span className="player">
              {editingName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={checking_clicking}>{isEditing? 'Save' : 'Edit'}</button>
          </li>
        
        </>
    )
}
