import React, { useState, useEffect, useContext }  from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { CartContext } from "../../context/CartContext"

const ItemCountCart = ({id,stock, cantidadActual}) =>{

    const [cantidad, setCantidad] = useState(cantidadActual)
    const {updateItem} = useContext(CartContext)

    const cambiarCantidad = (e) =>{
        if(e){
            cantidad < stock && setCantidad(cantidad + 1)
        }else{
            stock !== 0 && cantidad > 1 && setCantidad(cantidad - 1)
        }
    }

    useEffect(()=>{
        cantidadActual > stock && setCantidad(stock)

        updateItem(id,cantidad)
        
    },[cantidad])

    return(
        <div className="agregar contadorCarrito">
            <span className="stockProductoCarrito"> En stock: {stock} </span>
            <div>
                <button onClick={()=>{ cambiarCantidad(false) }} type="button"><FontAwesomeIcon icon={faMinus} /></button>
                <input type="text" value={cantidad} disabled/>
                <button onClick={()=>{ cambiarCantidad(true) }} type="button"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    )
}

export default ItemCountCart