import React from "react"
import CartWidget from "../CartWidget"
import './NavBar.css'

const Item = (props) =>{
    return(
        <li><a key={props.categoria} href="#">{props.categoria}</a></li>
    )
}

const NavBar = () => {
    let categorias = ['Celulares','Computadoras','Parlantes','Relojes']
    return(
        <header>
            <div className="headerCenter">
                <a href="/" className="logo">
                    <h2><span>Tech</span>Shop</h2>
                </a>
                <form action="#" className="buscador">
                  <input type="text" placeholder="¿Qué estas buscando?" />  
                </form>
                <div className="contenedorInfoUsuario">
                    <CartWidget cantidad={0}/>
                    <div className="usuario">
                        <span>¡Bienvenido!</span>
                        <div><a href="#">Iniciar</a>|<a href="#">Registro</a></div>
                    </div>
                </div>
                <nav> 
                    <ul> { categorias.map(e => <Item categoria={e} />) } </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
  