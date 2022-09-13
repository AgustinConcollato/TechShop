import React, { useEffect, useState } from "react"
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ItemCount.css'

const ItemCount = ({stock,iniciar}) =>{

    const [cantidadTotal,setCantidad] = useState(iniciar)

    useEffect(()=>{
        stock === 0 ? setCantidad(0) : setCantidad(iniciar)
    },[stock])

    const cambiarCantidad = (e) =>{
        if(e){
            cantidadTotal < stock && setCantidad(cantidadTotal + 1)
        }else{
            stock !== 0 && cantidadTotal > 1 && setCantidad(cantidadTotal - 1)
        }
    }
    return(
        <form action="#" className="agregar">
            <div>
                <button onClick={()=>{ cambiarCantidad(false) }} type="button"><FontAwesomeIcon icon={faMinus} /></button>
                <input type="text" value={cantidadTotal} disabled/>
                <button onClick={()=>{ cambiarCantidad(true) }} type="button"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <button type="submit" className="btnAgregar">Agregar al carrito</button>
        </form>
    )
}

export default ItemCount