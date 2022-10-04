import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setHeaders, url } from '../../../features/api';
import { StyledTransaction, Transaction } from '../../../CommonStyled';
import moment from 'moment/moment';
const Transactions = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get(`${url}/orders/?new=true`, setHeaders());
                setOrders(res.data);
                setLoading(false)

            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        };

        fetchData();
    }, [])
    return (
        <StyledTransaction>
            {loading ? <p>Transaction loading..</p> :
                <>
                    <h3>Latest transaction</h3>
                    {
                        orders?.map((order, index) =>
                            <Transaction key={index}>
                                <p>{order.shipping.name}</p>
                                <p>${(order.total / 100).toLocaleString()}</p>
                                <p>{moment(order.createdAt).fromNow()}</p>
                            </Transaction>)
                    }
                </>
            }
        </StyledTransaction>
    );
};

export default Transactions;