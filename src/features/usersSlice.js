import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios'
import { setHeaders, url } from './api'

const initialState = {
    list: [],
    status: null,
    editStatus : null,
    deleteStatus: null
}
//fetch all users
export const usersFetch = createAsyncThunk(
    "users/usersFetch",
    async () => {
        try {
            const response = await axios.get(`${url}/users`, setHeaders());
            return response?.data;
        } catch (error) {
            console.log(error)
        }
    }
)

//delete user
export const usersDelete = createAsyncThunk(
    "users/usersDelete",
    async (id) => {
        try {
            const response = await axios.delete(`${url}/users/${id}`, setHeaders());
            return response?.data;
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data)
        }
    }
)

//update user
export const usersEdit = createAsyncThunk(
    "users/usersEdit",
    async (values) => {
        try {
            console.log('vslue', values)
            const response = await axios.put(`${url}/users/${values._id}`, values, setHeaders());
            return response?.data;

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data)
        }
    }
)


//create slice
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},

    extraReducers: {
        //get all user
        [usersFetch.pending]: (state, action) => {
            state.status = 'pending'
        },

        [usersFetch.fulfilled]: (state, action) => {
            state.status = 'success';
            state.list = action.payload
        },

        [usersFetch.rejected]: (state, action) => {
            state.status = 'rejected'
        },

        //delete user
        [usersDelete.pending]: (state, action) => {
            state.deleteStatus = 'pending'
        },

        [usersDelete.fulfilled]: (state, action) => {
            state.deleteStatus = 'success';
            const newList = state.list.filter(item => item._id !== action.payload._id);
            state.list = newList;
            toast.error("Product Deleted Successfully!");
        },

        [usersDelete.rejected]: (state, action) => {
            state.deleteStatus = 'rejected'
        },

        //update user
        [usersEdit.pending]: (state, action) => {
            // console.log(action.payload)
            // console.log(state.list)
            state.editStatus = "pending"
        },

        [usersEdit.fulfilled]: (state, action) => {
            state.editStatus = "success";
            const updateUser = state.list.map(user => {
                return user._id === action.payload._id ? action.payload : user
            })
            state.list = updateUser;
            toast.info("User Edited Successfully!");
        },

        [usersEdit.rejected]: (state, action) => {
            state.editStatus = "rejected";
        },
    }
})
export default usersSlice.reducer;