import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList"
import Loading from "../Loading"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import './ItemListContainer.css'


const ItemListContainer = () => {

    const {idCategoria} = useParams()
    const [catalogo,setCatalogo] = useState({})
    const [loading, setLoading] = useState(true)

    const getCategoryItems = (db) =>{
        const itemsCollection = query(collection(db,"items"), where("category", "==", idCategoria))
        getDocs(itemsCollection).then(e => {
            setCatalogo(e.docs.map(item => ({...item.data()})))
            setLoading(false)
        })
    }
    const getItems = (db) =>{
        const itemsCollection = collection(db,"items")
        getDocs(itemsCollection).then(e => {
            setCatalogo(e.docs.map(item => ({...item.data()})))
            setLoading(false)
        })
    }

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        idCategoria ? getCategoryItems(db) : getItems(db)

        document.title = idCategoria ? 'TechShop • ' + idCategoria : 'TechShop'  
    },[idCategoria])

    return(
        <section>
            {loading ? <Loading /> : <ItemList catalogo={catalogo}/>}
        </section>
    )
}

export default ItemListContainer