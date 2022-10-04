import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productsCreate } from '../../features/productsSlice';
import { ImagePreview, PrimaryButton, StyledCreateProduct, StyledForm } from '../../CommonStyled';

const CreateProduct = () => {
    const [productImage, setProductImage] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
        TransformFile(file);
    }


    //hien thi image truoc khi dua len mongoose
    const TransformFile = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);

            reader.onloadend = () => {
                setProductImage(reader.result)
            }
        } else {
            setProductImage('')
        }
    }

    //handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(productsCreate({
            name,
            brand,
            price,
            desc,
            image: productImage
        }))
        navigate('/admin/products')
    }

    return (
        <StyledCreateProduct onSubmit={handleSubmit}>
            <StyledForm>
                <h3>Create a Product</h3>
                <input
                    type="file"
                    accept='image/png, image/jpg, image/jpeg'
                    required
                    onChange={handleProductImageUpload}
                />
                <select
                    required
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
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    required
                    placeholder='Price'
                    onChange={e => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    required
                    placeholder='Short description'
                    onChange={e => setDesc(e.target.value)}
                />
                <PrimaryButton type='submit'>Submit</PrimaryButton>
            </StyledForm>
            <ImagePreview>
                {productImage ?
                    <>
                        <img src={productImage} alt="product image" />
                    </> :
                    <p>Image preview will appear here!</p>
                }
            </ImagePreview>
        </StyledCreateProduct>
    );
};

export default CreateProduct;