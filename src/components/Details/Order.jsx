import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Report, ItemOrder, ItemsOrder, OrdersContainer,  PendingOrder, StyledOrder, DispatchedOrder, DeliveredOrder } from '../../CommonStyled';
import { setHeaders, url } from '../../features/api';
//report
import { useReactToPrint } from 'react-to-print';
const Order = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const fetchOrder = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`${url}/orders/findOne/${id}`, setHeaders());
                setOrder(res.data);
                setLoading(false)
            } catch (error) {
                console.log("Error : ", error)
                setLoading(false)
            }
        };

        fetchOrder();
    }, [id])
    const handlePrint = useReactToPrint({
        content: () => ref.current,
    });
    return (
        <>
            <StyledOrder ref={ref}>
                {loading ? <p>Loading...</p> :
                    (
                        <OrdersContainer>
                            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Order Details</h2>
                            <span>
                                Delivered Status :
                                {order.delivery_status === "pending" ? <PendingOrder> Pending</PendingOrder> : (
                                    order.delivery_status === "dispatched" ? <DispatchedOrder> Dispatched</DispatchedOrder> : (
                                        order.delivery_status === "delivered" ? <DeliveredOrder> Delivered</DeliveredOrder> : <p>"error"</p>
                                    )
                                )}
                            </span>

                            <h3>Ordered Products</h3>
                            <ItemsOrder>
                                <ItemOrder>
                                    <table>
                                        <tr>
                                            <th>Description</th>
                                            <th>Quantity</th>
                                            <th>Total price</th>
                                        </tr>
                                        {order.products?.map((product, index) => (
                                            <tr key={index}>
                                                {console.log(product)}
                                                <td>{product.description}</td>
                                                <td>{product.quantity}</td>
                                                <td>${product.amount_total}</td>
                                            </tr>
                                        ))}
                                    </table>

                                </ItemOrder>

                            </ItemsOrder>

                            <div>
                                <h3>Total Price</h3>
                                <p>Total price : ${order.total}</p>
                            </div>
                            <div>
                                <h3>Shipping Details</h3>
                                <p>Customer : {order.shipping?.name}</p>
                                <p>City : {order.shipping?.address.city}</p>
                                <p>Email : {order.shipping?.email}</p>
                            </div>
                        </OrdersContainer>
                    )
                }
            </StyledOrder>
            <Report onClick={handlePrint}>Create report</Report>
        </>

    );
};

export default Order;