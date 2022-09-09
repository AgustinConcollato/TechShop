import React, { useState, useEffect } from "react"
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ImgDetalle = ({src, alt, setImgActual}) =>{
    return(
        <div key={src.id} className="imgDetalle" onMouseMove={()=> setImgActual(src.url)} >
            <img className="imgLaterales" src={src.url} alt={alt} />
        </div>
    )
}

const Variedad = ({pickers, idActual}) =>{  
    const [color,setColor] = useState('#ddd')

    useEffect(()=>{
        pickers.product_id === idActual && setColor('#d66140')
    },[])

    return(
        <div style={{borderColor:color}} key={pickers.product_id}>
            <img src={pickers.thumbnail} alt={pickers.picker_label} />
        </div>
    )
}

const ItemDetail = ({detalle}) =>{
    const [imgActual, setImgActual] = useState(detalle.pictures[0].url)

    let marca = ''
    for(let e of detalle.attributes) {
        if(e.id === 'BRAND'){
            marca = e.value_name
            break
        }    
    }

    if(detalle.buy_box_winner === null){
        return (
            <div className="detalle">
                <span className="error">¡Error! No se pudo encontrar el producto</span>
            </div>
        ) 
    }else{ 
        return(
            <div key={detalle.id} className="detalle">
                <div className="contenedorImg">
                    <div className="contenedorImgLaterales">
                        {detalle.pictures.map(img =>( <ImgDetalle src={img} alt={detalle.title} setImgActual={setImgActual} />))}
                    </div>
                    <img className="imgActual" src={imgActual} alt={detalle.title} />
                </div>
                <div className="infoDetalle">
                    <span className="marca"> {marca} </span>
                    <h1 className="nombre"> {detalle.name} </h1>
                    <h4 className="precio"> ${detalle.buy_box_winner.price} </h4>
                    <div className="caracteristicas">
                        <button className="btnCaracteristias">Caracteristicas</button>
                        <ul> { detalle.main_features.map(caracteristica => (<li> {caracteristica.text} </li>)) } </ul>
                    </div>
                    <div className="variedad"> {detalle.pickers !== null && detalle.pickers[0].products.map(variedad => (<Variedad pickers={variedad} idActual={detalle.id} />))} </div>
                    <span className="stock"> En stock: {detalle.buy_box_winner.available_quantity} </span>
                    <ItemCount stock={detalle.buy_box_winner.available_quantity} iniciar={1} />
                </div>
            </div>
        )
    }
}

export default ItemDetail