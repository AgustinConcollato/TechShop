import React from "react"
import ItemCount from "../ItemCount"
import './ItemListContainer.css'


const ItemListContainer = () => {
    return(
        <section className="contenedorProductos">
            <ItemCount stock={5} iniciar={1} />
            <ItemCount stock={0} iniciar={1} />
        </section>
    )
}

export default ItemListContainer