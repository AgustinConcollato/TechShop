import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Error = ({id}) =>{
    return(
        <div className="errorOrder">
            <FontAwesomeIcon icon={faTimesCircle} />
            <h1>¡Error al procesar tu compra!</h1>
            <p> Código: <span> {id} </span></p>
            <Link to={'/'} className="volverInicio" >Volver al inicio</Link>
        </div> 
    )
}

export default Error