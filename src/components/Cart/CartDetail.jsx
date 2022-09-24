import React from "react"
import { Link } from "react-router-dom"

const CartDetail = ({cart}) =>{

    const imgDetalleCarrito = () => {
        if(cart.length < 4){
            return cart.map(e => (<div><img src={e.pictures[0].url} alt={e.name || e.title} /></div>)) 
        } else if(cart.length > 3){
            return(
                <>
                {cart.slice(0,2).map(e =>(<div><img src={e.pictures[0].url} alt={e.name || e.title} /></div>))}
                <div className="sobrante"><span>+ {cart.length - 2}</span></div>
                </>
            )
        }
    }

    return(
        <div className="detalleCarrito">
            <h4>Detalle de tu compra</h4>
            <div className="imgDetalle">
                {imgDetalleCarrito()}
            </div>
            <span>Subtotal: ${cart.reduce((acumulado, carrito)=>acumulado + carrito.precioTotal , 0)} </span>
            <Link to={'/'}>Seguir comprando</Link>
            <Link to={'#'}>Comprar</Link>
        </div>
    )
}

export default CartDetail