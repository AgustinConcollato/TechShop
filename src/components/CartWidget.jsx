import React, { useContext, useState, useEffect } from "react"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/UserContext"

const CartWidget = () =>{

    const {cart, allItems} = useContext(CartContext)
    const [cantidadCarrito, setCantidadCarrito] = useState(0)
    const {user} = useContext(UserContext)

    useEffect(()=>{
        setCantidadCarrito(allItems())
    },[cart,user])

    return(
        <div className="carrito">
            <FontAwesomeIcon icon={faCartShopping} className="iconoCarrito" />
            {cantidadCarrito !== 0 && <span className="cantidadCarrito"> { cantidadCarrito } </span>}
        </div>
    )
}

export default CartWidget