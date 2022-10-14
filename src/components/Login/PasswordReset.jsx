import React, { useState, useContext } from "react"
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from "../../context/UserContext"

const PasswordReset = ({setCambiarContrasena}) =>{

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [correo, setCorreo] = useState('')
    const { passwordReset } = useContext(UserContext)

    const varificarCorreo = (e) =>{
        e.preventDefault()
        passwordReset(correo,setError,setSuccess,setCambiarContrasena)
    }

    return(
        <form onSubmit={e => varificarCorreo(e)} className="formCambiarContrasena">
            <FontAwesomeIcon icon={faTimes} onClick={()=> setCambiarContrasena(false)} />
            <h2>Cambiar Contraseña</h2>
            <div>
                <input onKeyUp={e => {
                    setError('')
                    setCorreo(e.target.value)
                }} type="email" id="correo" autoComplete="off" />
                <label htmlFor="correo">Correo electrónico</label>
            </div>
            {error && <span> {error} </span>}
            {success && <span className="success"> {success} </span>}
          <button type="submit">Verificar correo</button>
      </form>
    )
}

export default PasswordReset