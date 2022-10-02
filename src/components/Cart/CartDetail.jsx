import React from "react"
import { Link } from "react-router-dom"

const CartDetail = ({cart, setCheckout}) =>{

    const imgDetalleCarrito = () => {
        if(cart.length < 4){
            return cart.map(e => (<div><img src={e.pictures[0]} alt={e.name} /></div>)) 
        } else if(cart.length > 3){
            return(
                <>
                {cart.slice(0,2).map(e =>(<div><img src={e.pictures[0]} alt={e.name} /></div>))}
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
            <span>Total: ${cart.reduce((acumulado, carrito)=>acumulado + carrito.precioTotal , 0)} </span> 
            <div>
                <Link to={'/'}>Seguir comprando</Link>
                <button onClick={() => setCheckout(true)}>Comprar</button>
            </div>
        </div>
    )
}

export default CartDetail