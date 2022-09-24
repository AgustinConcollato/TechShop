import React, { useContext } from "react"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from "../context/CartContext"
import { useState } from "react"
import { useEffect } from "react"

const CartWidget = () =>{

    const {cart, allItems} = useContext(CartContext)
    const [cantidadCarrito, setCantidadCarrito] = useState(0)

    useEffect(()=>{
        setCantidadCarrito(allItems())
    },[cart])

    return(
        <div className="carrito">
            <FontAwesomeIcon icon={faCartShopping} className="iconoCarrito" />
            {cantidadCarrito !== 0 && <span className="cantidadCarrito"> { cantidadCarrito } </span>}
        </div>
    )
}

export default CartWidget