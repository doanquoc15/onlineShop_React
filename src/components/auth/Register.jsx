import React, { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/authSlice';
import './register.css'

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth)

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        if (auth._id)
            navigate('/cart')
    }, [auth._id, navigate])

    //handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(user))
    }

    return (
        <div className="register">
            <div className="login">
                <form onSubmit={handleSubmit} className='login-form'>
                    <div className="login-text">register</div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder='User name..'
                            value={user.name}
                            onChange={e => setUser({ ...user, name: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input
                            type="email"
                            value={user.email}
                            placeholder='Email..'
                            onChange={e => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Password</label>
                        <input
                            type="password"
                            value={user.password}
                            placeholder='Password..'
                            onChange={e => setUser({ ...user, password: e.target.value })}
                        />
                    </div>

                    <button className='btn-sign-in'>{auth.registerStatus === 'pending' ? 'Submitting' : 'Register'}</button>

                    {auth.registerStatus === 'rejected' ? <span className='error-display'>{auth.registerError}</span> : null}
                </form>
            </div>
        </div>
    );
};

export default Register;