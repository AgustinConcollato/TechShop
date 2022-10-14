import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemError from "../ItemDetail/ItemError"
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [detalle,setDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    const {idProducto} = useParams()

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()

        const item = doc(db,"items",idProducto)
        getDoc(item).then(e => {
            if(e._document === null){
                setError(true)
            }else{
                setError(false)
                setDetalle(e.data())
            }
            setLoading(false)
        })
    },[idProducto])
    
    return(
        <section className="contenedorDetalle">
            {loading ? <Loading /> : error ? <ItemError id={idProducto} /> : <ItemDetail detalle={detalle} />}
        </section>
    )
}

export default ItemDetailContainer
