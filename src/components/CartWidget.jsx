import React from "react"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartWidget = (props) =>{
    return(
        <div className="carrito">
            <FontAwesomeIcon icon={faCartShopping} className="iconoCarrito" />
            <span className="cantidadCarrito"> {props.cantidad} </span>
        </div>
    )
}

export default CartWidget