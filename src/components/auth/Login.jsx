import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/authSlice';
import './register.css'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth)

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    useEffect(() => {
        if (auth._id) {
            navigate("/cart");
        }
    }, [auth._id, navigate]);
    
    //handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(user))
    }

    return (
        <div className="register">
            <div className="login">
                <form onSubmit={handleSubmit} className='login-form'>
                    <div className="login-text">login</div>
                   
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

                    <button className='btn-sign-in'>{auth.loginStatus === 'pending' ? 'Submitting...' : 'Login'}</button>

                    {auth.loginStatus === 'rejected' ? <span className='error-display'>{auth.loginError}</span> : null}
                </form>
            </div>
        </div>
    );
};

export default Login;