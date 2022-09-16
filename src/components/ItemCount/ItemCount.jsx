import React, { useEffect, useState } from "react"
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ItemCount.css'

const ItemCount = ({stock,iniciar,onAdd}) =>{

    const [cantidad,setCantidad] = useState(iniciar)

    useEffect(()=>{
        stock === 0 ? setCantidad(0) : setCantidad(iniciar)
    },[stock])

    const cambiarCantidad = (e) =>{
        if(e){
            cantidad < stock && setCantidad(cantidad + 1)
        }else{
            stock !== 0 && cantidad > 1 && setCantidad(cantidad - 1)
        }
    }
    return(
        <div className="agregar">
            <span className="stock"> En stock: {stock} </span>
            <div>
                <button onClick={()=>{ cambiarCantidad(false) }} type="button"><FontAwesomeIcon icon={faMinus} /></button>
                <input type="text" value={cantidad} disabled/>
                <button onClick={()=>{ cambiarCantidad(true) }} type="button"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <button onClick={()=>cantidad !== 0 && onAdd(cantidad)} type="submit" className="btnAgregar">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount