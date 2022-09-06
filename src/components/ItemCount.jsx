import React, { useEffect, useState } from "react"

const ItemCount = ({stock,iniciar}) =>{

    const [cantidadTotal,setCantidad] = useState(iniciar)

    useEffect(()=>{
        stock === 0 && setCantidad(0)
    },[cantidadTotal])

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
                <button onClick={()=>{ cambiarCantidad(false) }} type="button" className="fa-solid fa-minus" />
                <input type="text" value={cantidadTotal} disabled/>
                <button onClick={()=>{ cambiarCantidad(true) }} type="button" className="fa-solid fa-plus" />
            </div>
            <button type="submit" className="btnAgregar">Agregar</button>
        </form>
    )
}

export default ItemCount