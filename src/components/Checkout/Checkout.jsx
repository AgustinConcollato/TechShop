import React, { useState, useContext, useEffect } from "react"
import './Checkout.css'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setCheckout}) =>{

    const {cart, clear} = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState(0)
    const [error, setError] = useState('')
    const [errorNombre, setErrorNombre] = useState('')
    const [errorCorreo, setErrorCorreo] = useState('')
    const [errorTelefono, setErrorTelefono] = useState('')
    const navigate = useNavigate(); 

    const sendOrder = () =>{
        const buyer = {name: nombre, phone: telefono, email: correo}
        const items = []
        cart.forEach(e => items.push({id: e.id, title: e.name, price: e.price, available: e.cantidad}))

        const order = {
            buyer: buyer,
            items: items,
            total: cart.reduce((acumulado, carrito)=>acumulado + carrito.precioTotal , 0)
        }

        const db = getFirestore()
        const orderCollection = collection(db,"orders")
        addDoc(orderCollection,order).then(({id}) => {
            clear()
            navigate("/success/"+id)
        })
    }

    const validadForm = (e) =>{
        e.preventDefault()
        if(nombre === '' || correo === '' || telefono === 0){
            setError('*Completa todos los campos para terminar la compra')
        }else{
            sendOrder()
        }
    }
    const validarCorreo = (e) =>{
        setError('')

        const expresionCorreo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(expresionCorreo.test(e)){
            setCorreo(e)
            setErrorCorreo('')
        }else{
            setCorreo('')
            setErrorCorreo('*La direccion de correo no tiene el formato requerido')
        }

        e === '' && setErrorCorreo('')
    }
    const validarNombre = (e) =>{
        setError('')

        const expresionNombre = /^[a-zA-Z ]+$/
        if(expresionNombre.test(e)){
            setNombre(e)
            setErrorNombre('')
        }else{
            setNombre('')
            setErrorNombre('*El nombre no debe contener numeros ni símbolos')
        }

        e === '' && setErrorNombre('')
    }
    const validarTelefono = (e) =>{
        setError('')
        if(e.length >= 9){
            setTelefono(e)
            setErrorTelefono('')
        }else{
            setTelefono(0)
            setErrorTelefono('*El teléfono debe contener 9 caracteres como mínimo. Agrégale 0 adelante si hace falta')
        } 

        e.length === 0 && setErrorTelefono('')
    }   

    return(
        <div className="checkout">
            <span onClick={()=>setCheckout(false)}><FontAwesomeIcon icon={faAngleLeft} /> Volver al carrito</span>
            <form className="formCheckout" onSubmit={e => validadForm(e)}>
                <div>
                    <input type="text" name="nombre" id="nombre" autoComplete="off" onKeyUp={e => validarNombre(e.target.value.trim())} />
                    <label htmlFor="nombre">Nombre</label>
                    <span className="error"> {errorNombre} </span>
                </div>
                <div>
                    <input type="email" name="correo" id="correo" autoComplete="off" onKeyUp={e => validarCorreo(e.target.value.trim())} />
                    <label htmlFor="correo">Correo electrónico</label>
                    <span className="error"> {errorCorreo} </span>
                </div>
                <div>
                    <input type="number" min={0} name="telefono" id="telefono" autoComplete="off" onChange={e => validarTelefono(e.target.value)} />
                    <label htmlFor="telefono">Teléfono</label>
                    <span className="error"> {errorTelefono} </span>
                </div>
                <button type="submit">Terminar compra <span className="error"> {error} </span></button>
            </form>
        </div>
    )
}

export default Checkout