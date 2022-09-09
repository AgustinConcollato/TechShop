import React, { useEffect, useState } from "react"
import ItemList from "../ItemList"
import Loading from "../Loading"
import './ItemListContainer.css'


const ItemListContainer = () => {

    const [catalogo,setCatalogo] = useState([])

    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=notebook&limit=10`)
        .then(resultado =>{
            return resultado.json()
        }).then(resultado =>{
            setCatalogo(resultado.results)
        }).catch( error =>{
            setCatalogo([])
        })
    },[])

    return(
        <section>
            {catalogo.length !== 0 ? <ItemList catalogo={catalogo}/> : <Loading />}
        </section>
    )
}

export default ItemListContainer