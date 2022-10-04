import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios'
import { setHeaders, url } from './api'

const initialState = {
    items: [],
    status: null,
    createStatus: null,
    deleteStatus: null,
    editStatus: null
};
//get product
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try {
            const response = await axios.get(`${url}/products`);
            return response.data;

        } catch (error) {
            console.log(error);
        }
    }
)
//create product
export const productsCreate = createAsyncThunk(
    "products/productsCreate",
    async (values) => {
        try {
            const response = await axios.post(`${url}/products`, values, setHeaders());
            return response?.data;

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data)
        }
    }
);

//delete product
export const productsDelete = createAsyncThunk(
    "products/productsDelete",
    async (id) => {
        try {
            const response = await axios.delete(`${url}/products/${id}`, setHeaders());
            return response?.data;

        } catch (error) {
            console.log('error', error);
            toast.error(error.response?.data)
        }
    }
)

//edit product
export const productsEdit = createAsyncThunk(
    "products/productsEdit",
    async (values) => {
        try {
            console.log('val',values)
            const response = await axios.put(`${url}/products/${values.product._id}`, values, setHeaders());
            return response?.data;

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data)
        }
    }
)




//create slice
const productsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {},

    extraReducers: {
        //get product
        [productsFetch.pending]: (state, action) => {
            state.status = "pending"
        },

        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload
        },

        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
        },

        //create product
        [productsCreate.pending]: (state, action) => {
            state.createStatus = "pending"
        },

        [productsCreate.fulfilled]: (state, action) => {
            state.createStatus = "success";
            state.items.push(action.payload);
            toast.success("Product Created Successfully!");
        },

        [productsCreate.rejected]: (state, action) => {
            state.createStatus = "rejected";
        },
        // delete product
        [productsDelete.pending]: (state, action) => {
            state.deleteStatus = "pending"
        },

        [productsDelete.fulfilled]: (state, action) => {
            state.deleteStatus = "success";
            const newList = state.items.filter(item => item._id !== action.payload._id);
            state.items = newList;
            // console.log(action.payload)
            toast.error("Product Deleted Successfully!");
        },

        [productsDelete.rejected]: (state, action) => {
            state.deleteStatus = "rejected";
        },

        // edit product
        [productsEdit.pending]: (state, action) => {
            state.editStatus = "pending"
        },

        [productsEdit.fulfilled]: (state, action) => {
            state.editStatus = "success";
            const updatedProduct = state.items.map(product => {
                return product._id === action.payload._id ? action.payload : product
            })
            state.items = updatedProduct;
            toast.info("Product Edited Successfully!");
        },

        [productsEdit.rejected]: (state, action) => {
            state.editStatus = "rejected";
        },
    }
})


export default productsSlice.reducer;