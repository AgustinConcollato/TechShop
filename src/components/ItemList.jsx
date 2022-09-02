import React from "react"
import Item from "./Item/Item"

const ItemList = ({catalogo}) => {
    return(
        <div className="contenedorProductos">
            { catalogo.map(e => <Item img={e.img} nombre={e.nombre} descripcion={e.descripcion} precio={e.precio} stock={e.stock} />) }
        </div>
    )
}


export default ItemList