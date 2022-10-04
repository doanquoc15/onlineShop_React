import React from 'react';
import { useSelector } from 'react-redux';
import { Data, Info, Main, TitleAllTime } from '../../../CommonStyled';

const AllTimeData = ({users}) => {
    const { items } = useSelector(state => state.products);
    const { list } = useSelector(state => state.orders);
    const total_price = list.reduce((total, value) => {
        return total += value.total
    },0)

    return (
        <Main>
            <h3>All Time Data</h3>

            <Info>
                <TitleAllTime>Users</TitleAllTime>
                <Data>{users?.length}</Data>
            </Info>
            <Info>
                <TitleAllTime>Products</TitleAllTime>
                <Data>{items?.length}</Data>
            </Info>
            <Info>
                <TitleAllTime>Orders</TitleAllTime>
                <Data>{list?.length}</Data>
            </Info>
            <Info>
                <TitleAllTime>Earning</TitleAllTime>
                <Data>$ {total_price}</Data>
            </Info>

        </Main>
    );
};

export default AllTimeData;