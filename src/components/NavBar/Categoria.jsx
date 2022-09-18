import React from "react"
import {Link} from 'react-router-dom'

const Categoria = (props) =>{
    return(
        <li key={props.categoria}><Link to={"/category/"+props.categoria} >{props.categoria}</Link></li>
    )
}

export default Categoria