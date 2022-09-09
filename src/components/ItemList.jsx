import React from "react"
import Item from "./Item/Item"

const ItemList = ({catalogo}) => {
    return(
        <div className="contenedorProductos">
            { catalogo.map(e => <Item producto={e} />) }
        </div>
    )
}


export default ItemList