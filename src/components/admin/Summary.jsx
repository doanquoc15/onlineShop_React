import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { FaUsers, FaChartBar, FaClipboard } from 'react-icons/fa'
import Widget from './summary-component/Widget'
import { MainStats, Overview, SideStats, StyledSummary, Title, WidgetWrapper } from '../../CommonStyled';
import Transactions from './summary-component/Transactions';
import { setHeaders, url } from '../../features/api'
import Chart from './summary-component/Chart';
import AllTimeData from './summary-component/AllTimeData';
import { useSelector } from 'react-redux';

const Summary = () => {
    //users
    const [users, setUsers] = useState([])
    const [usersPrec, setUsersPerc] = useState(0)

    //order
    const [orders, setOrders] = useState([])
    const [ordersPrec, setOrdersPerc] = useState(0)

    //income
    const [income, setIncome] = useState([])
    const [incomePrec, setIncomePerc] = useState(0)

    const {list} = useSelector(state => state.users)
    const data = [
        {
            icon: <FaUsers />,
            digits: users[0]?.total,
            isMoney: false,
            title: 'User',
            color: "rgb(92,108,255)",
            bgColor: 'rgba(92,108,255,0.12)',
            percentage: usersPrec,
        },

        {
            icon: <FaClipboard />,
            digits: orders[0]?.total,
            isMoney: false,
            title: 'Orders',
            color: 'rgb(152,225,25)',
            bgColor: 'rgba(152,225,25,0.12)',
            percentage: ordersPrec,
        },
        {
            icon: <FaChartBar />,
            digits: income[0]?.total ? income[0]?.total : "",
            isMoney: false,
            title: 'Earnings',
            color: 'rgb(192,16,255)',
            bgColor: 'rgba(192,16,255,0.12)',
            percentage: incomePrec,
        },

    ];
    const compare = (a, b) => {
        if (a._id < b._id)
            return 1;
        if (a._id > b._id)
            return -1;

        return 0;

    }
    //user
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${url}/users/stats`, setHeaders())
                res.data.sort(compare);
                setUsers(res.data)
                setUsersPerc((res.data[0].total - res.data[1].total) / res.data[1].total * 100)
            } catch (error) {

            }
        };

        fetchData();
    }, []);

    //orders
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${url}/orders/stats`, setHeaders())
                res.data.sort(compare);
                setOrders(res.data)
                setOrdersPerc((res.data[0].total - res.data[1].total) / res.data[1].total * 100)
            } catch (error) {

            }
        };

        fetchData();
    }, []);


    //income
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${url}/orders/income/stats`, setHeaders())
                res.data.sort(compare);
                setIncome(res.data)
                setIncomePerc((res.data[0].total - res.data[1].total) / res.data[1].total * 100)
            } catch (error) {

            }
        };

        fetchData();
    }, []);


    return (
        <StyledSummary>
            <MainStats>
                <Overview>
                    <Title>
                        <h2>Overview</h2>
                        <p>How your shop is performing compared to the previous month.</p>
                    </Title>
                    <WidgetWrapper>
                        {data?.map((data, index) =>
                            <Widget key={index} data={data} />
                        )}
                    </WidgetWrapper>
                </Overview>
                <Chart />
            </MainStats>
            <SideStats>
                <Transactions />
                <AllTimeData users={list} />
            </SideStats>
        </StyledSummary>
    );
};

export default Summary;