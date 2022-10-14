import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Success = ({id, order}) =>{

    const [orderDetail, setOrderDetail] = useState(false)

    return(
        <div className="successOrder"> 
            <div className={orderDetail ? "successOrderDetail" : ""}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <div>
                    <h1>¡Tu compra fue procesada con exito!</h1>
                    <p>Código: <span onClick={()=> setOrderDetail(!orderDetail)} > {id} </span></p>
                </div>
            </div>
            {
            orderDetail && 
            <div className="order">
                <table cellSpacing={0}>
                    <tr>
                        <th className="orderProducto">Productos</th>
                        <th className="orderCantidad">Cantidad</th>
                        <th className="orderPrecio">Precio</th>
                    </tr>
                    {order.data().items.map(e => 
                    <tr>
                        <td className="orderProducto">{e.title}</td>
                        <td>{e.quantity}</td> 
                        <td>$ {e.price}</td>
                    </tr>)}
                    <tr  className="orderPrecioTotal">
                        <td></td>
                        <td>Precio Total</td>
                        <td>$ {order.data().total} </td>
                    </tr>
                </table>
                {order.data().comment &&
                <div className="comentario">
                    Comentario
                    <p> {order.data().comment} </p>
                </div>}
            </div>
            }
            <Link to={'/'} className="volverInicio">Volver al inicio</Link>
            <Link to={'/myPurchases'} className="orderMisCompras" >Mis compras</Link>
        </div> 
    )
} 

export default Success