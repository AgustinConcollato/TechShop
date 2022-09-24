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
        let items = cart.filter(item => item.id !== id)
        setCart(items)
    }
    const clear = () =>{
        setCart([])
    }
    const updateItem = (id,cantidad) =>{
        let productoActualizar = cart.find(e => e.id === id)
        productoActualizar.cantidad = cantidad 
        productoActualizar.precioTotal = (productoActualizar.price || productoActualizar.buy_box_winner.price) * cantidad
        setCart([...cart])
    } 
    const allItems = () =>{
        return cart.reduce((acumulado, producto)=>acumulado + producto.cantidad , 0)
    }

    return <CartContext.Provider value={{cart,addItem,removeItem,updateItem,allItems,clear}}> {children} </CartContext.Provider>
}

export default CartProvider