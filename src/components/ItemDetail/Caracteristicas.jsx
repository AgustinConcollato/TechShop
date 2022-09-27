import React, { useState, useEffect} from "react"

const Caracteristicas = ({caracteristica}) =>{
    const [btnEstilos,setBtnEstilos] = useState()
    
    useEffect(()=>{
        caracteristica.hasOwnProperty('main_features') ? setBtnEstilos('block') : setBtnEstilos('none')
    },[])

    return(
        <div>
            <button style={{display:btnEstilos}} className="btnCaracteristias">Caracteristicas</button>
            <ul> {caracteristica.main_features?.map(caracteristica => (<li key={caracteristica} className="caracteristica"> {caracteristica} </li>))} </ul>
        </div>
    )
}

export default Caracteristicas