import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.css'
import CartContainer from "./CartContainer"
import CartEmpty from "./CartEmpty"

const Cart = () =>{

    const {cart} = useContext(CartContext)

    return(
        <section>
            {cart.length === 0 ? <CartEmpty /> : <CartContainer />}
        </section>
     )
}

export default Cart