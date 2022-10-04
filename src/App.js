import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CheckoutSuccess from './components/CheckoutSuccess';
import Dashboard from './components/admin/Dashboard';
import Products from './components/admin/Products';
import Summary from './components/admin/Summary';
import CreateProduct from './components/admin/CreateProduct';
import ProductsList from './components/admin/list/ProductsList';
import Orders from './components/admin/Orders'
import Users from './components/admin/Users';
import Product from './components/Details/Product'
import Order from './components/Details/Order'
import EditUser from './components/admin/EditUser'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ToastContainer />
                <NavBar />
                <div className="content-container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout-success' element={<CheckoutSuccess />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        {/* details*/}
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/order/:id' element={<Order/>}/>
                        <Route path='/user/:id' element={<EditUser />} />
                        
                        <Route path='/admin' element={<Dashboard />} >
                            <Route path='products' element={<Products />} >
                                <Route index element={<ProductsList />} />
                                <Route path='create-product' element={<CreateProduct />} />
                            </Route>
                            <Route path='summary' element={<Summary />} />
                            <Route path='orders' element={<Orders/>} />
                            <Route path='users' element={<Users />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
