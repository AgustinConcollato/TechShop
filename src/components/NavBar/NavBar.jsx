import React, {useState, useEffect} from "react"
import CartWidget from "../CartWidget"
import {Link} from 'react-router-dom'
import './NavBar.css'
import Categoria from "./Categoria"
import Buscador from "./Buscador"

const NavBar = () => {

    const categorias = ['Celulares','Computadoras','Parlantes','Relojes']

    const [posicion, setPosicion ] = useState(window.pageYOffset)
    const [heightHeader, setHeightHeader] = useState(120)
  
    useEffect(()=>{
      window.onscroll = () => {
        if(posicion <= window.pageYOffset){
          setHeightHeader(80)
        }else{
          setHeightHeader(120)
        }
        setPosicion(window.pageYOffset)
      }
    }, [posicion])

    return(
        <header style={{height: heightHeader}}>
            <div className="headerCenter">
                <Link className="logo" to={'/'} ><h2><span>Tech</span>Shop</h2> </Link>
                <Buscador />
                <div className="contenedorInfoUsuario">
                    <Link to={'/cart'}><CartWidget /></Link>
                    <div className="usuario">
                        <span>¡Bienvenido!</span>
                        <div><Link to={"#"} >Iniciar</Link>|<Link to={"#"} >Registro</Link></div>
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
  