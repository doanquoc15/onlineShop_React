import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Edit } from '../../CommonStyled';
import { ImagePreview, PrimaryButton, StyledEditProduct, StyledForm } from '../../CommonStyled';
import { productsEdit } from '../../features/productsSlice';


const EditProduct = ({prodId}) => {
    // state
    const [productImage, setProductImage] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [open, setOpen] = useState(false);
    const [currentProd, setCurrentProd] = useState({});
    const [previewImg, setPreviewImg] = useState('')

     //variable
    const dispatch = useDispatch();
    const { items, editStatus } = useSelector(state => state.products)


    //method
    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
        TransformFile(file);
    }

    const TransformFile = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);

            reader.onloadend = () => {
                setProductImage(reader.result)
                setPreviewImg(reader.result)
            }
        } else {
            setProductImage('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(productsEdit({
            productImage,
            product : {
                ...currentProd,
                name,
                brand,
                price,
                desc
            }
        }))
    }

    const handleClickOpen = () => {
        setOpen(true);

        const selectedProd = items.filter(item => item._id === prodId)[0]
        setCurrentProd(selectedProd);
        setProductImage('')
        setPreviewImg(selectedProd.image?.url);
        setBrand(selectedProd.brand);
        setName(selectedProd.name);
        setPrice(selectedProd.price);
        setDesc(selectedProd.desc);
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Edit variant="outlined" onClick={handleClickOpen}>
                Edit
            </Edit>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Product</DialogTitle>
                <DialogContent>
                    <StyledEditProduct >
                        <StyledForm onSubmit={handleSubmit}>
                            <h3>Edit a Product</h3>
                            <input
                                type="file"
                                accept='image/png, image/jpg, image/jpeg'
                                onChange={handleProductImageUpload}
                            />
                            <select
                                required
                                value={brand}
                                onChange={e => setBrand(e.target.value)}
                            >
                                <option value="">Select Brand</option>
                                <option value="iphone">Iphone</option>
                                <option value="samsung">Samsung</option>
                                <option value="xiaomi">Xiaomi</option>
                                <option value="vivo">Vivo</option>
                                <option value="other">Other</option>
                            </select>
                            <input
                                type="text"
                                required
                                placeholder='Name'
                                value = {name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                required
                                placeholder='Price'
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                            <input
                                type="text"
                                required
                                placeholder='Short description'
                                value={desc}
                                onChange={e => setDesc(e.target.value)}
                            />
                            <PrimaryButton type='submit'>
                                {editStatus === "pending " ? "Submitting" : "Submit"}
                            </PrimaryButton>
                        </StyledForm>
                        <ImagePreview>
                            {previewImg ?
                                <>
                                    <img src={previewImg} alt="product image" />
                                </> :
                                <p>Image preview will appear here!</p>
                            }
                        </ImagePreview>
                    </StyledEditProduct>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditProduct;