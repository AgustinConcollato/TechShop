import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [detalle,setDetalle] = useState({})
    const {idProducto} = useParams()

    const apiProducts = () =>{
        fetch(`https://api.mercadolibre.com/products/${idProducto}`)
        .then(producto =>{
            return producto.json()
        }).then(producto =>{
            if(producto.status === 404){
                apiItems()
            }else{
                setDetalle(producto)            
            }
        }).catch( error =>{
            setDetalle({})   
        })
    }
    const apiItems = () =>{
        fetch(`https://api.mercadolibre.com/items/${idProducto}`)
        .then(producto =>{
            return producto.json()
        }).then(producto =>{
            setDetalle(producto)            
        }).catch( error =>{
            setDetalle({})   
        })
    }

    useEffect(()=>{
        apiProducts()
    },[idProducto])
    
    return(
        <section className="contenedorDetalle">
            {Object.entries(detalle).length !== 0 ? <ItemDetail detalle={detalle} /> : <Loading />}
        </section>
    )
}

export default ItemDetailContainer
