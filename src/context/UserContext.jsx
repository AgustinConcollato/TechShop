import React, { createContext, useState,  useEffect  } from "react"
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext()

const UserProvider = ({children}) =>{

    const navigate = useNavigate()
    const auth = getAuth()
    const [user,setUser] = useState(null)

    const register = ({correo,contrasena,nombre},setError) =>{
        createUserWithEmailAndPassword(auth, correo, contrasena)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: nombre,
            }).then(() =>{
                navigate("/")
            })
          })
          .catch(error => {
            const errorCode = error.code;
            errorCode === 'auth/email-already-in-use' && setError('*Este correo electrónico ya está en uso.')
        })
    } 
    const login = ({correo,contrasena},setError) =>{
        signInWithEmailAndPassword(auth, correo, contrasena)
        .then(() => {
            navigate("/")
        })
        .catch(error => {
            const errorCode = error.code
            errorCode === 'auth/wrong-password' && setError('*La contraseña es incorrecta.')
            errorCode === 'auth/too-many-requests' && setError('*El acceso a esta cuenta se ha inhabilitado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede volver a intentarlo más tarde.')
            errorCode === 'auth/user-not-found' && setError('*No se encontró ningún usuario. Prueba con otro correo' )
        })
    }
    const logOut = () =>{
        signOut(auth)
        .then(()=> {
            setUser(null)
            navigate('/login')
        })
    }
    const passwordReset = (correo,setError,setSuccess) =>{
        sendPasswordResetEmail(auth, correo)
        .then(() => {
            setSuccess('¡El correo se envió correctamente! Ya puedes iniciar sesión con tu contraseña nueva. (Revisa en la casilla de "spam")')
        })
        .catch((error) => {
            const errorCode = error.code;
            errorCode === 'auth/user-not-found' && setError('*No se encontró ningún usuario. Prueba con otro correo' )
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            user && setUser(user)
        })
    },[])

    return <UserContext.Provider value={{register, login, logOut, passwordReset , user}}> {children} </UserContext.Provider>
}

export default UserProvider