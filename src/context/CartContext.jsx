import React, { createContext, useState,  useEffect, useContext } from "react"
import { UserContext } from "./UserContext"

export const CartContext = createContext()

const CartProvider = ({children}) =>{
    
    const {user} = useContext(UserContext)

    const [cart, setCart] = useState([])
    const [userId, setUserId] = useState('')

    const isInCart = (producto) => cart.some(cartProducto => cartProducto.id === producto.id)

    const addItem = (producto) =>{
        if(isInCart(producto)){
            let productoExistente = cart.find(e => e.id === producto.id)
            productoExistente.cantidad += producto.cantidad   
            setCart([...cart])
            localStorage.setItem('cart'+userId,JSON.stringify([...cart]))
        }else{
            setCart([...cart, producto]) 
            localStorage.setItem('cart'+userId,JSON.stringify([...cart, producto]))
        }
    }
    const removeItem = (id) =>{
        let items = cart.filter(item => item.id !== id)
        setCart(items)
        localStorage.setItem('cart'+userId,JSON.stringify(items))
    }
    const clear = () =>{
        setCart([])
        localStorage.removeItem('cart'+userId)
    }
    const updateItem = (id,cantidad) =>{
        let productoActualizar = cart.find(e => e.id === id)
        productoActualizar.cantidad = cantidad 
        productoActualizar.precioTotal = (productoActualizar.price || productoActualizar.buy_box_winner.price) * cantidad
        setCart([...cart])
        localStorage.setItem('cart'+userId,JSON.stringify([...cart]))

    }
    const getCart = () => {
        if(user !== null){
            setCart([])
            localStorage.getItem('cart-'+user.uid) && setCart(JSON.parse(localStorage.getItem('cart-'+user.uid)))
        }
    }

    const allItems = () => cart.reduce((acumulado, producto)=>acumulado + producto.cantidad , 0)
    
    useEffect(()=>{
        setCart([])
        setUserId(user !== null && '-'+user.uid)
        getCart()
    },[user])

    return <CartContext.Provider value={{cart,addItem,removeItem,updateItem,allItems,clear}}> {children} </CartContext.Provider>
}

export default CartProvider