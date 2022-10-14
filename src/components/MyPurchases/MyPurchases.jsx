import React, { useEffect, useContext, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { UserContext } from "../../context/UserContext"
import Loading from "../Loading"
import Purchases from "./Purchases"
import './MyPurchases.css'
import { Link } from "react-router-dom"


const MyPurchases = () =>{

    const {user} = useContext(UserContext)

    const [orders,setOrders] = useState(null)
    const [loading, setLoading] = useState(true)
    const [sesion, setSesion] = useState('')

    const getOrders = () =>{
        const db = getFirestore()
        const ordersCollection = query(collection(db,"orders"), where("uid", "==", user.uid))
        getDocs(ordersCollection).then(e => {
            e.docs.length !== 0 && setOrders(e.docs.map(order => ({...order.data(), id: order._document.key.path.segments[6]})))
            setLoading(false)
        })
    } 

    useEffect(()=>{
        setSesion('')
        user !== null ? getOrders() : setSesion('Para poder ver tus compras, necesitas iniciar sesión') 
        document.title = 'Mis compras'  
    },[user])

    return(
        sesion ? 
        <section className="noUser">
            <h1> {sesion} </h1>
            <Link to={'/register'}>Registrarse</Link>
            <Link to={'/login'}>Iniciar sesión</Link>
        </section>
        :
        <section className="misCompras">
            <h1>Mis compras</h1> 
            {loading ? <Loading /> : orders !== null ? <Purchases orders={orders} /> : <p>¡Todavía no has realizado ninguna compra!</p>}
        </section>
    )
}

export default MyPurchases

