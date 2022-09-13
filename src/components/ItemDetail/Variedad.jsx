import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const Variedad = ({pickers, idActual}) =>{  
    const [estilos,setEstilos] = useState(['#ddd','block'])

    useEffect(()=>{
        pickers.product_id === idActual && setEstilos(['#d66140','block'])
        pickers.thumbnail === '' && setEstilos(['#fff','none'])
    },[])

    return(
        <Link to={'/item/'+pickers.product_id} className="imgVariedad" style={{borderColor:estilos[0], display:estilos[1]}}>
            <img src={pickers.thumbnail} alt={pickers.picker_label} />
        </Link>
    )
}

export default Variedad