import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Edit } from '../../CommonStyled';
import { PrimaryButton, StyledEditProduct, StyledForm } from '../../CommonStyled';
import { usersEdit } from '../../features/usersSlice';
import { current } from '@reduxjs/toolkit';
import axios from 'axios';
import { setHeaders, url } from '../../features/api';
import { toast } from 'react-toastify';


const EditUser = ({ userId }) => {
    // state
    const [open, setOpen] = useState(false);

    //variable
    const { list, editStatus } = useSelector(state => state.users)
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        isAdmin: false,
        password: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('user',{...user})
        dispatch(usersEdit({ ...user }))
    }

    const handleClickOpen = () => {
        setOpen(true);

        const user = list.filter(item => item._id === userId)[0]
        setUser({
            ...user,
        })


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
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <StyledEditProduct >
                        <StyledForm onSubmit={handleSubmit}>
                            <h3>Edit a User</h3>

                            <input
                                type="text"
                                required
                                placeholder='Username'
                                value={user.name}
                                onChange={e => setUser({ ...user, name: e.target.value })}
                            />
                            <input
                                type="email"
                                required
                                placeholder='Email'
                                value={user.email}
                                onChange={e => setUser({ ...user, email: e.target.value })}
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                value={user.password}
                                required
                                onChange={e => setUser({ ...user, password: e.target.value })}
                            />
                            <PrimaryButton type='submit'>
                                {editStatus === "pending " ? "Submitting" : "Submit"}
                            </PrimaryButton>
                        </StyledForm>

                    </StyledEditProduct>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditUser;