import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductImageContainer, ProductContainer, ProductDetails, StyledProduct, Price } from '../../CommonStyled';
import { setHeaders, url } from '../../features/api';
import {addToCart} from '../../features/cartSlice.js'

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchData = async (req, res) => {
            try {
                const res = await axios.get(`${url}/products/find/${id}`, setHeaders());
                setProduct(res.data)
            } catch (error) {
                console.log('Error :',error)
            }
            setLoading(false)
        };

        fetchData()
    }, [id])

    //add to cart
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate('/cart')
    }
    return (
        <StyledProduct>
            <ProductContainer>
                {loading ? <p>Loading..</p> :
                    (<>
                        <ProductImageContainer>
                            <img src={product.image?.url} alt="" />
                        </ProductImageContainer>
                        <ProductDetails>
                            <h3>{product.name}</h3>
                            <p><span>Brand : </span>{product.brand}</p>
                            <p><span>Description : </span>{product.desc}</p>
                            <Price>${product.price?.toLocaleString()}</Price>

                            <button
                                className='product-add-to-cart'
                                onClick={() => handleAddToCart(product)}
                            >Add To Cart</button>
                        </ProductDetails>
                    </>)}
            </ProductContainer>
        </StyledProduct>
    );
};

export default Product;