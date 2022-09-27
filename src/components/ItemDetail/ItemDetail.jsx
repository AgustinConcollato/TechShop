import React, { useState, useEffect, useContext } from "react"
import ItemCount from '../ItemCount/ItemCount'
import ImgDetalle from "./ImgDetalle"
import Caracteristicas from "./Caracteristicas"
import './ItemDetail.css'
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({detalle}) =>{ 
    console.log(detalle)

    const {addItem} = useContext(CartContext)

    const [imgActual, setImgActual] = useState('')
    const [imgLaterales, setImgLaterales] = useState([])
    const [precio, setPrecio] = useState(0)
    const [stock, setStock] = useState(0)
    const [nombre, setNombre] = useState('')
    const [marca, setMarca] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [id, setId] = useState('')

    const onAdd = (c) =>{
        setCantidad(c)
        const producto = {...detalle, cantidad: c, precioTotal: precio * c}
        addItem(producto)
    }

    useEffect(()=>{
        setCantidad(0)
        setId(detalle.id)
        setImgActual(detalle.pictures[0])
        setImgLaterales(detalle.pictures)
        setPrecio(detalle.price)
        setStock(detalle.available_quantity)
        setNombre(detalle.name)
        setMarca(detalle.brand)
    },[detalle])

    return(
        <div key={id} className="detalle">
            <div className="contenedorImg">
                <div className="contenedorImgLaterales">
                    {imgLaterales.map(img =>( <ImgDetalle src={img} alt={nombre} setImgActual={setImgActual} />))}
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
                <div className="variedad"></div>  
                {cantidad === 0 ? <ItemCount stock={stock} iniciar={1} onAdd={onAdd} /> : <Link className="terminarCompra" to={'/cart'}>Terminar mi compra</Link>}
            </div>
        </div>
    ) 
}

export default ItemDetail