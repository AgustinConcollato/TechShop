import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import ItemCountCart from "../ItemCount/ItemCountCart"

const CartProducto = ({cartProducto, removeItem}) =>{
    return(
        <div className="productoCarrito">
            <FontAwesomeIcon  icon={faTimes}  onClick={(() => removeItem(cartProducto.id))} className="removerProductoCarrito"/>
            <div className="imgProductoCarrito">
                <img src={cartProducto.pictures[0].url} alt={cartProducto.title || cartProducto.name} />
            </div>
            <div className="contenedorNombre">
                <Link to={'/item/'+cartProducto.id} title={cartProducto.title || cartProducto.name}> {cartProducto.title || cartProducto.name} </Link>
            </div>
            <ItemCountCart id={cartProducto.id} stock={cartProducto.available_quantity || cartProducto.buy_box_winner.available_quantity} cantidadActual={cartProducto.cantidad} />
            <span className="productoCarritoPrecio" >$ {cartProducto.precioTotal} </span>
        </div>
    )
}

export default CartProducto