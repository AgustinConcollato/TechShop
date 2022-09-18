import React, { useState, useEffect } from "react"
import ItemCount from '../ItemCount/ItemCount'
import ImgDetalle from "./ImgDetalle"
import Variedad from "./Variedad"
import Caracteristicas from "./Caracteristicas"
import './ItemDetail.css'
import { Link } from "react-router-dom"

const ItemDetail = ({detalle}) =>{

    const [imgActual, setImgActual] = useState('')
    const [imgLaterales, setImgLaterales] = useState([])
    const [precio, setPrecio] = useState(0)
    const [stock, setStock] = useState(0)
    const [nombre, setNombre] = useState('')
    const [marca, setMarca] = useState('')
    const [cantidad, setCantidad] = useState(0)

    const indiceVariedad = () =>{
        if(detalle.pickers !== null){
            if(detalle.pickers?.length !== 1){
                for(let i = 0; i < detalle.pickers?.length; i++){
                    return detalle.pickers[i].products.map(variedad => (<Variedad pickers={variedad} idActual={detalle.id} />))
                }
            }else{
                return detalle.pickers[0].products.map(variedad => (<Variedad pickers={variedad} idActual={detalle.id} />))
            }
        } 
    }

    const onAdd = (c) =>{
        setCantidad(c)
        console.log('Se agregó al carrito:' + nombre)
        console.log('Cantidad:' + c)
    }

    useEffect(()=>{
        setCantidad(0)

        if(detalle.status === 'active'){
            if(detalle.hasOwnProperty('buy_box_winner')){
                if(detalle.buy_box_winner === null){
                    setPrecio(<span className="noDisponible">Este producto no está disponible. Elige otra variante.</span>)
                    setStock(0)
                }else{
                    setNombre(detalle.name)
                    setPrecio(detalle.buy_box_winner?.price)
                    setStock(detalle.buy_box_winner?.available_quantity)
                }
            }else{
                setPrecio(detalle.price)
                setNombre(detalle.title)
                setStock(detalle.available_quantity)
            }

            setImgActual(detalle.pictures[0].url)
            setImgLaterales(detalle.pictures)
            
            for(let e of detalle.attributes) {
                if(e.id === 'BRAND'){
                    setMarca(e.value_name)
                    break
                }    
            }
        }else{
            setPrecio(<span className="noDisponible">Este producto no está disponible por el momento.</span>)
            setImgActual('/multimedia/img/no_disponible.jpg')
            setImgLaterales([])
        }
    },[detalle])

    return(
        <div key={detalle.id} className="detalle">
            <div className="contenedorImg">
                <div className="contenedorImgLaterales">
                    {imgLaterales.map(img =>( <ImgDetalle src={img} alt={detalle.name} setImgActual={setImgActual} />))}
                </div>
                <img className="imgActual" src={imgActual} alt={detalle.name} />
            </div>
            <div className="infoDetalle">
                <span className="marca"> {marca} </span>
                <h1 className="nombre"> {nombre} </h1>
                <h4 className="precio"> ${precio} </h4>
                <div className="contenedorCaracteristicas">
                    <Caracteristicas caracteristica={detalle} />
                </div>
                <div className="variedad"> {indiceVariedad()} </div>  
                {cantidad === 0 ? <ItemCount stock={stock} iniciar={1} onAdd={onAdd} /> : <Link className="terminarCompra" to={'/cart'}>Terminar mi compra</Link>}
            </div>
        </div>
    ) 
}

export default ItemDetail