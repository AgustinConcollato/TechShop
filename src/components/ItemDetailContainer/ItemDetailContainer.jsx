import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from '../Loading'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [detalle,setDetalle] = useState([])

    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/products/MLA18537647`)
        .then(producto =>{
            return producto.json()
        }).then(producto =>{
            setDetalle(producto)            
        }).catch( error =>{
            setDetalle([])   
        })
    },[])
    return(
        <section className="contenedorDetalle">
            {detalle.length !== 0 ? <ItemDetail detalle={detalle} /> : <Loading />}
        </section>
    )
}

export default ItemDetailContainer