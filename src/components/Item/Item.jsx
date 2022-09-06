import React from "react"
import ItemCount from "../ItemCount"
import './Item.css'

const Item = ({detalle})=> {  
    return(
        <div key={detalle.id} className="producto">
            <div className="imgProducto">
                <img src={detalle.img} alt={detalle.nombre} />
            </div>
            <div className="infoProducto">
                <span> En stock: {detalle.stock} </span>
                <h2> {detalle.nombre} </h2>
                <p> {detalle.descripcion} </p>
                <h4> ${detalle.precio} </h4>
            </div>
            <ItemCount stock={detalle.stock} iniciar={1} />
        </div>
    )
}

export default Item