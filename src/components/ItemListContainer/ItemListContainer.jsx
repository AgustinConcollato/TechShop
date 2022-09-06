import React, { useEffect, useState } from "react"
import ItemList from "../ItemList"
import Loading from "../Loading"
import './ItemListContainer.css'


const ItemListContainer = () => {

    const [catalogo,setCatalogo] = useState([])

    useEffect(()=>{
        const productos = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(
                    [
                        {   
                            id:'1',
                            img:'/multimedia/img/NotebookLenovo.jpg',
                            nombre:'Notebook Lenovo',
                            descripcion:'Lenovo Notebook S340-14API 14" Ryzen 3 3200U 8Gb 1TB W10S 81NB00G4AR',
                            precio:300,
                            stock:3
                        },
                        {   
                            id:'2',
                            img:'/multimedia/img/MiBand5.jpg',
                            nombre:'Xiaomi Mi Band 5',
                            descripcion:'Xiaomi Smartwatch Amazfit Band 5 Negro SP02 Reloj',
                            precio:400,
                            stock:10
                        },
                        {   
                            id:'3',
                            img:'/multimedia/img/MI11Lite.jpg',
                            nombre:'Xiaomi 11 Lite',
                            descripcion:'Xiaomi Celular MI 11 Lite 5G NE 8Gb 128Gb Pink 6,5"',
                            precio:500,
                            stock:5
                        },
                        {
                            id:'4',
                            img:'/multimedia/img/XiaomiKIESLECT.jpg',
                            nombre:'Xiaomi KIESLECT KR SP02',
                            descripcion:'Xiaomi Smartwatch KIESLECT KR SP02 Negro YFT2024EU',
                            precio: 150,
                            stock:0
                        }
                    ]
                )
            },2000)
        }        
    )

    productos.then((resultado)=>{
        setCatalogo(resultado)
    }).catch((error)=>{
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