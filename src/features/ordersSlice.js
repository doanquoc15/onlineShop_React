import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios'
import { setHeaders, url } from './api'

const initialState = {
    list: [],
    status: null
};

//get all orders
export const ordersFetch = createAsyncThunk(
    "orders/ordersFetch",
    async () => {
        try {
            const response = await axios.get(`${url}/orders`);
            return response.data;
        } catch (error) {
            console.log('Error : ', error)
        }
    }
);

//edit order
export const ordersEdit = createAsyncThunk(
    "orders/ordersEdit",
    async (values, { getState }) => {
        const state = getState();

        const currentOrder = state.orders.list.filter(order => order._id === values.id)

        const newOrder = {
            ...currentOrder[0],
            delivery_status : values.delivery_status
        }

        try {
            const res = axios.put(`${url}/orders/${values.id}`, newOrder, setHeaders());
            return (await res).data;
        } catch (error) {
            console.log(error)
        }
    }
)
//create slice orders
const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},

    extraReducers: {
        //get all orders
        [ordersFetch.pending]: (state, action) => {
            state.status = 'pending';
        },

        [ordersFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.list = action.payload;
        },

        [ordersFetch.rejected]: (state, action) => {
            state.status = 'rejected';
        },

        //update orders
        [ordersEdit.pending]: (state, action) => {
            state.status = 'pending';
        },

        [ordersEdit.fulfilled]: (state, action) => {
            state.status = "success";
            const updatedOrders = state.list.map(order =>
                order._id === action.payload._id ? action.payload : order
            );

            state.list = updatedOrders;
        },

        [ordersEdit.rejected]: (state, action) => {
            state.status = 'rejected';
        }
    }


})

export default ordersSlice.reducer;