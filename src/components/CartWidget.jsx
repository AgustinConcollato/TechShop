import React from "react"

const CartWidget = (props) =>{
    return(
        <div className="carrito">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cantidadCarrito"> {props.cantidad} </span>
        </div>
    )
}

export default CartWidget