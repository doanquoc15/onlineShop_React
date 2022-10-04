import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Actions, View, Delete, Admin, Customer } from '../../../CommonStyled';
import { usersDelete, usersFetch } from '../../../features/usersSlice'
import { useNavigate } from 'react-router-dom';
import EditUser from '../EditUser';



const UsersList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersFetch())
    }, []);


    const { list } = useSelector(state => state.users);
    const rows = list?.map(user => (
        {
            id: user._id,
            uName: user.name,
            uEmail: user.email,
            isAdmin: user.isAdmin,
            uPassword: user.password,
        }
    ));

    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'uName', headerName: 'Username', width: 140 },
        { field: 'uEmail', headerName: 'Email', width: 220 },
        { field: 'uPassword', headerName: 'Password', width: 200 },
        {
            field: 'isAdmin', headerName: 'Role', width: 130,
            renderCell: params => (
                <div>
                   {params.row.isAdmin ? <Admin>Admin</Admin> : <Customer>Customer</Customer>}
                </div>
            )    },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 230,
            renderCell: params => (
                <Actions>
                    <EditUser userId = {params.row.id}>Edit</EditUser>
                    <Delete onClick={() =>handleDeleteUser(params.row.id)}>Delete</Delete>
                    <View onClick={() => navigate(`/user/${params.row.id}`)}>Detail</View>
                </Actions>
            )
        },
    ];

    //delete user
    const handleDeleteUser = (id) => {
        dispatch(usersDelete(id))
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



export default UsersList;