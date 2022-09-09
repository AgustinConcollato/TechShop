import React from "react"
import './Item.css'

const Item = ({producto})=> { 
    return(
        <div key={producto.id} className="producto">
            <div className="imgProducto">
                <img src={producto.thumbnail} alt={producto.title} />
            </div>
            <div className="infoProducto">
                <span> En stock: {producto.available_quantity} </span>
                <h2> {producto.title} </h2>
                <h4> ${producto.price} </h4>
            </div>
        </div>
    )
}

// usar el "catalog_product_id" en el detalle

export default Item