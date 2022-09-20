import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.css'

const Cart = () =>{

    const {cart, clear} = useContext(CartContext)
    const [vaciarCarrito, setVaciarCarrito] = useState(false)

    return(
        <section>
            <div className="contenedorCarrito">
            <h1>Tu carrito</h1>
            <button onClick={() => setVaciarCarrito(!vaciarCarrito)} className="opcionesCarrito"> <FontAwesomeIcon icon={faEllipsisV} /> </button>
            <div className= {vaciarCarrito ? 'menuOpcionesCarrito menuVisible' : 'menuOpcionesCarrito menuHidden'}>
                <button onClick={() => cart.length !== 0 && clear()} className="vaciar" >Vaciar el carrito</button>
            </div>
            </div>
        </section>
     )
}

export default Cart