import React from "react"
import { Link } from "react-router-dom"
import './MyPurchases.css'

const Purchases = ({orders}) =>{
    console.log(orders)
    return(
        <div className="misCompras">
            {orders.map(order => (
                <div className="compras">
                    <div className="comprasHeader">
                        <h3>{Date(order.datetime)}</h3>
                        <p>Código: <span> {order.id} </span></p>
                    </div>
                    <table cellSpacing={0}>
                        <tr>
                            <th className="orderProducto">Productos</th>
                            <th className="orderCantidad">Cantidad</th>
                            <th className="orderPrecio">Precio</th>
                        </tr>
                        {order.items.map(item => (
                            <tr>
                                <td className="orderProducto"><Link to={'/item/'+item.id} title={item.title} >{item.title}</Link></td>
                                <td>{item.quantity}</td> 
                                <td>$ {item.price}</td>
                            </tr>
                        ))}
                        <tr  className="orderPrecioTotal">
                            <td></td>
                            <td>Precio Total</td>
                            <td>$ {order.total} </td>
                        </tr>
                    </table>
                    {order.comment &&
                    <div className="comentario">
                        Comentario
                        <p> {order.comment} </p>
                    </div>}
                </div>
            ))}
        </div>
    )
}

export default Purchases

