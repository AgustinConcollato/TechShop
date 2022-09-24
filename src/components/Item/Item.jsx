import React from "react"
import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({producto})=> { 
    let id = producto.catalog_product_id || producto.id
    return(
        <Link to={'/item/'+id} className="producto" title={producto.title}>
            <div className="imgProducto">
                <img src={producto.thumbnail} alt={producto.title} />
            </div>
            <div className="infoProducto">
                <h2> {producto.title} </h2>
                <h4> ${producto.price} </h4>
            </div>
        </Link>
    )
}

export default Item