import React from "react"
import CartWidget from "../CartWidget"
import {Link} from 'react-router-dom'
import './NavBar.css'

const Categorias = (props) =>{
    return(
        <li key={props.categoria}><Link to={"/category/"+props.categoria} >{props.categoria}</Link></li>
    )
}

const NavBar = () => {
    let categorias = ['Celulares','Computadoras','Parlantes','Relojes']
    return(
        <header id="encabezado">
            <div className="headerCenter">
                <Link className="logo" to={'/'} >
                    <h2><span>Tech</span>Shop</h2>
                </Link>
                <form action="#" className="buscador">
                <input type="text" placeholder="¿Qué estas buscando?" />  
                </form>
                <div className="contenedorInfoUsuario">
                    <CartWidget cantidad={0}/>
                    <div className="usuario">
                        <span>¡Bienvenido!</span>
                        <div><Link to={"#"} >Iniciar</Link>|<Link to={"#"} >Registro</Link></div>
                    </div>
                </div>
                <nav> 
                    <ul> { categorias.map(e => <Categorias categoria={e} />) } </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
  