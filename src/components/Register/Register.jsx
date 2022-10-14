import React, { useState, useContext, useEffect } from "react"
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Register = () =>{

  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [nombre, setNombre] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const {register, user} = useContext(UserContext)

  const validarForm = (e) => {
    e.preventDefault()
    if(correo !== '' && contrasena !== '' && nombre !== ''){
      const dataRegister = {
        correo: correo,
        contrasena: contrasena,
        nombre: nombre
      }
      register(dataRegister,setError)
    }else{
      setError('*Completa todos los campos')
    }
  }
  const validarNombre = (e) =>{
    setError('')

    const expresionNombre = /^[a-zA-Z ]+$/
    if(expresionNombre.test(e)){
        setNombre(e)
        setError('')
    }else{
        setNombre('')
        setError('*El nombre no debe contener números ni símbolos')
    }

    e === '' && setError('')
  }
  const validarCorreo = e =>{
    setError('')

    const expresionCorreo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(expresionCorreo.test(e)){
        setCorreo(e)
        setError('')
    }else{
        setCorreo('')
        setError('*La dirección de correo no tiene el formato requerido')
    }

    e === '' && setError('')
  }
  const validarContrasena = e =>{
    setError('')
    if(e.length < 6){
      setError('*La contraseña debe contener 6 o más caracteres')
      setContrasena('')
    }else{
      setError('')
      setContrasena(e)
    }
    e.length === 0 && setError('')
  }

  useEffect(()=>{
    document.title = 'TechShop • Registrarse'
    user !== null && navigate('/')
  },[user])

  return(
    <section>
      <form onSubmit={e => validarForm(e)} className="formRegister">
        <h1>Registrar</h1>
        <div>
          <input onKeyUp={e => validarNombre(e.target.value.trim())} type="text" id="nombre" autoComplete="off"/>
          <label htmlFor="nombre">Nombre y Apellido</label>
        </div>
        <div>
          <input onKeyUp={e => validarCorreo(e.target.value.trim())} type="email" id="correo" autoComplete="off" />
          <label htmlFor="correo">Correo electrónico</label>
        </div>
        <div>
          <input onKeyUp={e => validarContrasena(e.target.value.trim())} type="password" id="contrasena" />
          <label htmlFor="contrasena">Contraseña</label>
        </div>
        {error && <span> {error} </span>}
        <button type="submit">Registrarse</button>
        <p>¿Ya estás registrado? <Link to={'/login'}>Iniciar sesión</Link></p>
      </form>
    </section>
  )
}

export default Register