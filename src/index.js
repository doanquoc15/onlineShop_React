import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'

import productsReducer, { productsFetch } from './features/productsSlice'
import usersReducer, { usersFetch } from './features/usersSlice'
import ordersReducer, { ordersFetch } from './features/ordersSlice'
import { productsApi } from './features/productsApi';
import { getTotal } from './features/cartSlice'
import cartReducer from './features/cartSlice';
import authReducer, { loadUser } from './features/authSlice';

//store.js
const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        users: usersReducer,
        orders : ordersReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

store.dispatch(productsFetch());
store.dispatch(usersFetch());
store.dispatch(ordersFetch());
store.dispatch(getTotal());
store.dispatch(loadUser(null))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

