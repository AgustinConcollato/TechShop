import React from "react"
import ItemCount from "../ItemCount"
import './Item.css'

const Item = (props)=> {  
    return(
        <div key={props.id} className="producto">
            <div className="imgProducto">
                <img src={props.img} alt={props.nombre} />
            </div>
            <div className="infoProducto">
                <span> En stock: {props.stock} </span>
                <h2> {props.nombre} </h2>
                <p> {props.descripcion} </p>
                <h4> ${props.precio} </h4>
            </div>
            <ItemCount stock={props.stock} iniciar={1} />
        </div>
    )
}

export default Item