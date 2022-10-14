import React, { useEffect, useState, useContext } from "react"
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ItemCount.css'
import { UserContext } from "../../context/UserContext"
import { Link } from "react-router-dom"

const ItemCount = ({stock,iniciar,onAdd}) =>{

    const {user} = useContext(UserContext)

    const [cantidad,setCantidad] = useState(iniciar)
    const [sesion, setSesion] = useState(true)

    useEffect(()=>{
        stock === 0 ? setCantidad(0) : setCantidad(iniciar)
    },[stock])

    const cambiarCantidad = (e) =>{
        if(e){
            cantidad < stock && setCantidad(cantidad + 1)
        }else{
            stock !== 0 && cantidad > 1 && setCantidad(cantidad - 1)
        }
    }
    const validarUser = () =>{
        user !== null ? onAdd(cantidad) : setSesion(false)
    }

    return(
        <div className="agregar">
            <span className="stock"> En stock: {stock} </span>
            <div>
                <button onClick={()=>{ cambiarCantidad(false) }} type="button"><FontAwesomeIcon icon={faMinus} /></button>
                <input type="text" value={cantidad} disabled/>
                <button onClick={()=>{ cambiarCantidad(true) }} type="button"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <button onClick={()=>cantidad !== 0 && validarUser()} type="submit" className="btnAgregar">Agregar al carrito</button>
            {sesion || 
            <div className="noUserDetalle">
                <FontAwesomeIcon icon={faTimes} onClick={()=> setSesion(true)} />
                <h3>Para poder agregar al carrito, necesitas iniciar sesión</h3> 
                <Link to={'/register'} >Registrarse</Link>
                <Link to={'/login'} >Iniciar sesión</Link>
            </div>
            }
        </div>
    )
}

export default ItemCount