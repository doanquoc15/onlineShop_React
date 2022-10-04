import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Actions, Delete, ImageContainer, View } from '../../../CommonStyled';
import { useNavigate } from 'react-router-dom';
import { productsDelete } from '../../../features/productsSlice';
import EditProduct from '../EditProduct';



const ProductsList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.products);
    console.log(items)
    const rows = items?.map(item => (
        {
            id: item._id,
            imageUrl: item.image?.url,
            pName: item.name,
            pDesc: item.desc,
            price: item.price.toLocaleString()
        }
    ));

    const columns = [
        { field: 'id', headerName: 'ID', width: 230 },
        {
            field: 'imageUrl', headerName: 'Image', width: 100,
            renderCell: params => (
                <ImageContainer ImageContainer >
                    <img src={params.row.imageUrl} alt="" />
                </ImageContainer >
            )
        },
        { field: 'pName', headerName: 'Name', width: 200 },
        { field: 'pDesc', headerName: 'Description', width: 190, },
        { field: 'price', headerName: 'Price', width: 100, },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 208,
            renderCell: params => (
                <Actions>
                    <EditProduct prodId={params.row.id} />
                    <Delete onClick={() => handleDeleteProduct(params.row.id)}>Delete</Delete>
                    <View onClick={() => navigate(`/product/${params.row.id}`)}>Detail</View>
                </Actions>
            )
        },
    ];

    const handleDeleteProduct = (id) => {
        dispatch(productsDelete(id));
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



export default ProductsList;