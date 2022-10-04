import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Actions, DeliveredOrder, DeliveryBtn, DispatchBtn, DispatchedOrder, ViewOrder, PendingOrder } from '../../../CommonStyled';
import { ordersEdit, ordersFetch } from '../../../features/ordersSlice';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';


const OrdersList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //dispatch ordersFetch -> get all orders  ~ (index.js)
    useEffect(() => {
        dispatch(ordersFetch())
    }, []);


    const { list } = useSelector(state => state.orders);
    const rows = list?.map(order => (
        {
            id: order._id,
            cName: order.shipping.name,
            amount: (order.total),
            dStatus: order.delivery_status,
            date: moment(order.createdAt).fromNow(),
        }
    ));

    const columns = [
        { field: 'id', headerName: 'ID', width: 230 },
        { field: 'cName', headerName: 'Shipping', width: 150 },
        { field: 'amount', headerName: 'Amount($)', width: 120 },
        {
            field: 'dStatus', headerName: 'Delivery status', width: 140,
            renderCell: params => (
                <>
                    {params.row.dStatus === "pending" ? <PendingOrder>Pending</PendingOrder> : (
                        params.row.dStatus === 'dispatched' ? <DispatchedOrder>Dispatched</DispatchedOrder> : (
                            params.row.dStatus === 'delivered' ? <DeliveredOrder>Delivered</DeliveredOrder> : "Error order"
                        )
                    )}
                </>
            )
        },
        { field: 'date', headerName: 'Date', width: 130, },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 250,
            renderCell: params => (
                <Actions>
                    <DispatchBtn onClick={()=> handleDispatch(params.row.id)}>Dispatch</DispatchBtn>
                    <DeliveryBtn onClick={() => handleDelivered(params.row.id)}>Deliver</DeliveryBtn>
                    <ViewOrder onClick={() => navigate(`/order/${params.row.id}`)}>View</ViewOrder>
                </Actions>
            )
        },
    ];
    const handleDispatch = (id) => {
        dispatch(ordersEdit({
            id,
            delivery_status : "dispatched"
        }))
    }
    const handleDelivered = (id) => {
        dispatch(ordersEdit({
            id,
            delivery_status: "delivered"
        }))
    }
    

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};



export default OrdersList;