import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { StyledDashboard, SideNav, Content } from '../../CommonStyled'
import {FaUsers, FaStore, FaClipboard, FaTachometerAlt } from 'react-icons/fa'

const Dashboard = () => {
    const auth = useSelector((state) => state.auth);

    if (!auth.isAdmin) {
        return <p>Access denied !</p>
    }

    return (
        <StyledDashboard>
            <SideNav>
                <h3>Quick Links</h3>
                <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/summary'>
                    <FaTachometerAlt/>
                    Summary
                </NavLink>
                <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/products'>
                    <FaStore />
                    Products
                </NavLink>
                <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/orders'>
                    <FaClipboard/>
                    Orders
                </NavLink>
                <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/users'>
                    <FaUsers />
                    Users
                </NavLink>
            </SideNav>
            <Content>
                <Outlet />
            </Content>
        </StyledDashboard>
    );
};

export default Dashboard;
