import React from "react"
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const ItemError = ({id}) =>{
    return(
        <div>
            <div className="detalleError">
                <h1>!Error¡ Este producto no esta disponible</h1>
                <p>No se encontró ningún producto con el código: <span>{id}</span> </p>
            </div>
            <h2 className="subtitulo">Observa los demás productos de la tienda</h2>
            <ItemListContainer />
        </div>
    )
}

export default ItemError