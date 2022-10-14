import React, {useState, useContext} from "react"
import CartWidget from "../CartWidget"
import {Link} from 'react-router-dom'
import './NavBar.css'
import Categoria from "./Categoria"
import Buscador from "./Buscador"
import { UserContext } from "../../context/UserContext"
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {

    const categorias = ['Celulares','Computadoras','Parlantes','Relojes']
    const {logOut,user} = useContext(UserContext)

    const [cerrarSesion, setCerrarSesion] = useState(false)

    return(
        <header >
            <div className="headerCenter">
              <Link className="logo" to={'/'} ><h2><span>Tech</span>Shop</h2> </Link>
              <Buscador />
              <div className="contenedorInfoUsuario">
                  <Link to={'/cart'}><CartWidget /></Link>
                  <div className="usuario">
                      <span>¡Hola!</span>
                      {user !== null ? 
                      <div>
                        <span onClick={()=> setCerrarSesion(true)} className={cerrarSesion && "perfilSeleccionado"}> {user.displayName} </span>
                        <div className={ cerrarSesion ? 'perfil perfilVisible' : 'perfil perfilHidden'}>
                          <FontAwesomeIcon icon={faTimes} onClick={()=> setCerrarSesion(false)} />
                          <span> {user.displayName} </span>
                          <span> {user.email} </span>
                          <ul className="opcionesUsuario">
                            <li><Link to={'/myPurchases'}>Mis compras</Link></li>
                          </ul>
                          <button  onClick={()=> {
                              setCerrarSesion(false)
                              logOut()
                            }}>Cerrar sesión</button>
                        </div>
                      </div> : 
                      <div><Link to={"/login"} >Iniciar</Link>|<Link to={"/register"} >Registro</Link></div>
                    }
                  </div>
              </div>
              <nav> 
                  <ul> { categorias.map(e => <Categoria categoria={e} />) } </ul>
              </nav>
            </div>
        </header>
    )
}

export default NavBar
  