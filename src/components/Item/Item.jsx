import React from "react"
import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({producto})=> {   
    return(
        <Link to={'/item/'+producto.id} className="producto" title={producto.name}>
            <div className="imgProducto">
                <img src={producto.pictures[0]} alt={producto.name} />
            </div>
            <div className="infoProducto">
                <h2> {producto.name} </h2>
                <h4> ${producto.price} </h4>
            </div>
        </Link>
    )
}

export default Item