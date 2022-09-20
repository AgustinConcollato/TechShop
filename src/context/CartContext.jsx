import React, { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    const isInCart = (producto) =>{
        return cart.some(cartProducto => cartProducto.id === producto.id)
    }
    const addItem = (producto) =>{
        if(isInCart(producto)){
            let productoExistente = cart.find(e => e.id === producto.id)
            productoExistente.cantidad += producto.cantidad   
            setCart([...cart])
        }else{
            setCart([...cart, producto]) 
        }
    }
    const removeItem = (id) =>{
        for(let i = 0; i < cart.length; i++){
            if(cart[i].id === id){
                cart.splice(i,1)
                setCart([...cart])
            }
        }
    }
    const clear = () =>{
        setCart([])
    }

    return <CartContext.Provider value={{cart,addItem,removeItem,clear}}> {children} </CartContext.Provider>
}

export default CartProvider