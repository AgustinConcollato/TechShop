import React from "react"
import { Link } from 'react-router-dom'

const CartEmpty = () => {
    return(
        <div className="avisoCarritoVacio">
            <h1 >¡Tu carrito esta vacío! </h1>
            <span>¿Qué estas esperando para agregar lo que más te gusta?</span>
            <Link to={'/'}>Volver al inicio</Link>
        </div>
    )
}

export default CartEmpty