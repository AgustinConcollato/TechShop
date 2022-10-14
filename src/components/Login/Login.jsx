import React, { useState, useContext, useEffect } from "react"
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import PasswordReset from './PasswordReset'
import { UserContext } from '../../context/UserContext'


const Login = () =>{
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [error, setError] = useState('')
    const [cambiarContrasena, setCambiarContrasena] = useState(false)

    const {login, user} = useContext(UserContext)
    const navigate = useNavigate()

    const validarForm = (e) => {
        e.preventDefault()
        if(correo !== '' && contrasena !== ''){
            const dataLogin = {correo: correo, contrasena: contrasena}
            login(dataLogin,setError)
        }else{
        setError('*Completa todos los campos')
        }
    }
    
    useEffect(()=>{
        document.title = 'TechShop • Iniciar sesión'
        user !== null && navigate('/')
    },[user])
    
    return(
        <section>
            <form onSubmit={e => validarForm(e)} className="formLogin">
                <h1>Iniciar sesión</h1>
                <div>
                    <input onKeyUp={e => {
                        setError('')
                        setCorreo(e.target.value.trim())
                        }} type="email" id="correo" autoComplete="off" />
                    <label htmlFor="correo">Correo electrónico</label>
                </div>
                <div>
                    <input onKeyUp={e => {
                        setError('')
                        setContrasena(e.target.value.trim())
                        }} type="password" id="contrasena" />
                    <label htmlFor="contrasena">Contraseña</label>
                    <p onClick={()=>{setCambiarContrasena(true)}} className="olvidarContrasena">¿Olvidaste tu contraseña?</p>
                </div>
                {error && <span> {error} </span>}
                <button type="submit">Iniciar sesión</button>
                <p>¿No estás registrado? <Link to={'/register'}>Registrarse</Link> </p>
            </form>
            {cambiarContrasena && <PasswordReset setCambiarContrasena={setCambiarContrasena} /> }
        </section>  
    )
}

export default Login