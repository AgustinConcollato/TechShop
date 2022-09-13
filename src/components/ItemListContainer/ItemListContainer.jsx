import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList"
import Loading from "../Loading"
import './ItemListContainer.css'


const ItemListContainer = () => {

    const {idCategoria} = useParams()
    const [catalogo,setCatalogo] = useState([])

    function categoriasRandom(){
        const categoriasArray = ['Celulares','Computadoras','Parlantes','Relojes']
        return categoriasArray[Math.round(Math.random()*3)]
    }

    const busqueda = idCategoria || categoriasRandom() 

    useEffect(()=>{
        setCatalogo([])
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}&limit=40`)
        .then(resultado =>{
            return resultado.json()
        }).then(resultado =>{
            setCatalogo(resultado.results)
        }).catch( error =>{
            setCatalogo([])
        })
    },[idCategoria])

    return(
        <section>
            {catalogo.length !== 0 ? <ItemList catalogo={catalogo}/> : <Loading />}
        </section>
    )
}

export default ItemListContainer