import React, { useContext }  from "react"
import { CartContext } from "../../context/CartContext"

const RemoveItem = ({idProducto, onRemove}) =>{

    const {cart} = useContext(CartContext)

    return(
        cart.length !== 0 && cart.map(productoCart => productoCart.id === idProducto && <buttom onClick={()=>onRemove(productoCart.id)} className="eliminarItemCart">Eliminar del carrito</buttom>)
    )
}

export default RemoveItem