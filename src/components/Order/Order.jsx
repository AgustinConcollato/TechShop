import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getFirestore, getDoc } from 'firebase/firestore'
import './Order.css'
import Loading from "../Loading"
import Error from "./Error"
import Success from "./Success"

const Order = () =>{

    const {orderId} = useParams()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState({})

    useEffect(()=>{
        const db = getFirestore()
        const order = doc(db,"orders",orderId)
        getDoc(order).then(e => {
            e._document === null ? setError(true) : setError(false)
            setOrder(e)
            setLoading(false)
        })
        document.title = 'Order'
    },[])

    return(
        <section className="sectionOrder">
            {loading ? <Loading /> : error ? <Error id={orderId} /> : <Success order={order} id={orderId} /> }
        </section>
    )
}

export default Order