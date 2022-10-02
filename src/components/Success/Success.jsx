import React from "react"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './Success.css'

const Success = () =>{

    const {orderId} = useParams()
     
    return(
        <section className="success">
            <FontAwesomeIcon icon={faCircleCheck} />
            <h1>¡Tu compra fue procesada con exito!</h1>
            <p>Código de seguimiento: <span> {orderId} </span></p>
            <a href="/">Volver al inicio</a>
        </section>
    )
}

export default Success