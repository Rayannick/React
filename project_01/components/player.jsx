/* eslint-disable react/prop-types */

import { useState } from "react"



export default function Player( {name , symbol}){


    const [ isEditing , setEditing ] = useState( false)
function checking_clicking(){
   setEditing(true)
}
    

    const playerName = isEditing? <input type="text"  required/> : <span className="player-name">{name}</span>



    return(
        <>
         <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={checking_clicking}>Edit</button>
          </li>
        
        </>
    )
}