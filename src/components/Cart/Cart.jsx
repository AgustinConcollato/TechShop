import React, { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.css'
import CartContainer from "./CartContainer"
import CartEmpty from "./CartEmpty"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

const Cart = () =>{

    const {cart} = useContext(CartContext)
    const {user} = useContext(UserContext)

    const [sesion, setSesion] = useState('')

    useEffect(()=>{
        setSesion('')
        user === null && setSesion('Para poder ver tu carrito, necesitas iniciar sesión') 
        document.title = 'Cart'  
    },[user])

    return(
        sesion ? 
        <section className="noUser">
            <h1> {sesion} </h1>
            <Link to={'/register'}>Registrarse</Link>
            <Link to={'/login'}>Iniciar sesión</Link>
        </section>
        :
        <section>
            {cart.length === 0 ? <CartEmpty /> : <CartContainer />}
        </section>
     )
}

export default Cart