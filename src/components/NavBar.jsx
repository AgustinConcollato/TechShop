import React from "react";
import './NavBar.css';

const NavBar = () => {
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
                    <div className="carrito"><i className="fa-solid fa-cart-shopping"></i></div>
                    <div className="usuario">
                        <span>¡Bienvenido!</span>
                        <div><a href="#">Iniciar</a>|<a href="#">Registro</a></div>
                    </div>
                </div>
                <nav> 
                    <ul>
                        <li><a href="#">Celulares</a></li>
                        <li><a href="#">Computadoras</a></li>
                        <li><a href="#">Parlantes</a></li>
                        <li><a href="#">Relojes</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
  