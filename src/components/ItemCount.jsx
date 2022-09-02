import React, { useEffect, useState } from "react"

const ItemCount = ({stock,iniciar}) =>{

    const [cantidadTotal,setCantidad] = useState(iniciar)
    let cantidad = cantidadTotal    

    useEffect(()=>{
        stock === 0 ? setCantidad(0) : setCantidad(cantidadTotal)
    },[cantidadTotal])

    const cambiarCantidad = (e) =>{
        if(e){
            cantidad < stock ? cantidad = cantidadTotal + 1 : cantidad = stock
        }else{
            if(stock !== 0){
                cantidad <= 1 ? cantidad = 1 : cantidad = cantidadTotal - 1
            }
        }
        setCantidad(cantidad)
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