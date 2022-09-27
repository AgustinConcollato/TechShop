import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [detalle,setDetalle] = useState({})
    const [loading, setLoading] = useState(false)
    const {idProducto} = useParams()

    useEffect(()=>{
        setLoading(false)
        const db = getFirestore()

        const item = doc(db,"items",idProducto)
        getDoc(item).then(e => {
            setDetalle(e.data())
            setLoading(true)
        })
    },[idProducto])
    
    return(
        <section className="contenedorDetalle">
            {loading ? <ItemDetail detalle={detalle} /> : <Loading />}
        </section>
    )
}

export default ItemDetailContainer
