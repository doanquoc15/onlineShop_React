import styled from "styled-components";
//Products
export const AdminHeaders = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PrimaryButton = styled.button`
    padding: 9px 12px;
    border-radius: 5px;
    font-weight: 400;
    letter-spacing: 1.15px;
    background-color: #4b70e2;
    color: #f9f9f9;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0.5rem 0;
`;

//CreateProduct
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    margin-top: 2rem;
    select,
    input {
        padding: 7px;
        min-height: 30px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(182, 182, 182);
        margin: 0.3rem 0;
        &:focus {
        border: 2px solid rgb(0, 208, 255);
        }
    }
    select {
        color: rgb(95, 95, 95);
    }
`;

export const StyledCreateProduct = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ImagePreview = styled.div`
    margin: 2rem 0 2rem 2rem;
    padding: 2rem;
    border: 1px solid rgb(183, 183, 183);
    max-width: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    color: rgb(78, 78, 78);
    img {
        max-width: 100%;
    }
`;
//Dashboard

export const StyledDashboard = styled.div`
    display: flex;
    height: calc(100vh-70px);
`;

export const SideNav = styled.div`
    border-right: 1px solid gray;
    height: calc(100vh - 70px);
    position: fixed;
    overflow-y: auto;
    width: 200px;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    h3 {
        margin: 0 0 1rem 0;
        padding: 0;
        text-transform: uppercase;
        font-size: 17px;
    }

    a {
        text-decoration: none;
        margin-bottom: 1rem;
        font-size: 14px;
        display : flex;
        align-items : center;
        font-weight :700;

        svg{
        margin-right : 0.5rem;
        font-size : 18px;
        }
    }
`;

export const Content = styled.div`
    margin-left: 200px;
    padding: 2rem 3rem;
    width: 100%;
    font-weight : bold;
`;

//summary
export const StyledSummary = styled.div`
    width: 100%;
    display: flex;
    `

export const MainStats = styled.div`
    flex : 3;
    width: 100%;
`;

export const SideStats = styled.div`
    flex : 2;
    display : flex;
    flex-direction : column;
    margin-left : 2rem;
    width : 100%;
`;

export const Title = styled.div`
    p{
        font-size: 14px;
        color : rgba(234,234,255,0.68);
    }
`;

export const Overview = styled.div`
    background : rgb(48,51,78);
    color: rgba(234,234,255,0.87);
    width: 100%;
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const WidgetWrapper = styled.div`
    flex : 1;
    display:flex;
    width : 100%;
    justify-content: space-between;
    `

//Widget
export const StyledWidget = styled.div`
    display : flex;
    align-items : center;
    padding : 1rem 0;
`;


export const Icon = styled.div`
    margin-right: 0.5rem;
    padding: 0.5rem;
    color: ${({ color }) => color};
    background : ${({ bgColor }) => bgColor};
    border-radius : 3px;
    font-size : 20px;
    width : 100%
`;

export const Text = styled.div`
    h3{
        font-weight: 900;
    }

    p{
        font-size : 14px;
        color : rgba(234,234,255,0.68)
    }
`;

export const Percentage = styled.div`
    margin-left : 0.5rem;
    font-size : 14px;
    color : ${({ isPosition }) =>
        isPosition ? "rgba(114,225,40)" : "rgb(255,77,73)"
    }
`;
//chart 

export const StyledChart = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 2rem;
    padding: 1rem;
    border: 2px solid rgba(48,51,70,0.2);
    border-radius: 5px;

    h3{
        margin-bottom: 1rem;
    }
`;
export const Loader = styled.p`
    margin-top : 2rem;
`;

//transaction

export const StyledTransaction = styled.div`
    background: rgb(48,51,78);
    color : rgba(234,234,255,0.87);
    padding: 1rem;
    border-radius: 5px;
    width : 100%;
`;

export const Transaction = styled.div`
    display: flex;
    font-style: 14px;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 3px;
    background: rgba(38,198,29,0.12);

    p:nth-child(1){
        flex : 3;
    }
    p:nth-child(2){
        flex : 2;
    }
    p:nth-child(3){
        flex : 2;
    }
    &:nth-child(even){
        background: rgba(38,198,249,0.12);
    }
`;

//all time data

export const Main = styled.div`
    background : rgb(48,51,78);
    color : rgba(234,234,255,0.87);
    margin-top: 1.5rem;
    border-radius: 5px;
    padding: 1rem;
    font-size: 14px;
`;

export const Info = styled.div`
    display: flex;
    margin-top: 1rem;
    padding: 0.3rem;
    border-radius: 3px;
    background: rgba(38,198,29,0.12);
    &:nth-child(even){
        background: rgba(38,198,249,0.12);
    }
`;

export const TitleAllTime = styled.div`
    flex : 1;
`;

export const Data = styled.div`
    flex : 1;
    font-weight : 700;
`;

export const ImageContainer = styled.div`
    img{
        height : 40px;
    }
`;

export const Actions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    button{
        border: none;
        outline : none;
        padding: 3px 5px;
        color : white;
        border-radius : 3px;
        cursor : pointer;
    }
`;

export const Delete = styled.button`
    background-color: red;
    min-width : 50px;
`;

export const View = styled.button`
    background-color: rgb(114,205,100);
    min-width : 50px;
`;
export const Edit = styled.button`
    background-color: rgb(107,15,160);
    min-width : 50px;
`;

//Product (details)
export const StyledProduct = styled.div`
    margin:3rem;
    display: flex;
    justify-content: center;
    margin-top : 10rem;
`;

export const ProductContainer = styled.div`
    max-width:500px;
    width: 100%;
    height:auto;
    display: flex;
    box-shadow : rgba(100,100,111,0.22) 0px 7px 29px 0px;
    border-radius : 5px;
    padding: 2rem;
`;
export const ProductImageContainer = styled.div`
    flex : 1;
    img{
        width: 100%;
    }
`;
export const ProductDetails = styled.div`
    flex : 2;
    margin-left : 2rem;
    h3{
        font-size : 35px;
    }
    p span{
        font-weight : bold;
    }
`;
export const Price = styled.div`
    margin : 1rem 0;
    font-weight: bold;
    font-size:25px;
`;

//Edit product ~ Create
export const StyledEditProduct = styled.div`
    display: flex;
    justify-content: space-between;
`;

//orderslist < orders
export const DispatchBtn = styled.button`
    background :rgb(38,198,249);
`;

export const DeliveryBtn = styled.button` 
    background :rgb(102,108,255);
`;

export const ViewOrder = styled.button`
    background :rgb(114,225,40);
`;

export const Pending = styled.div` 
    color : rgb(253,181,10);
    background-color : rgb(253,181,40,0.12);
    padding : 3px 5px;
    border-radius : 3px;
    font-size : 14px;
`;

export const Dispatched = styled.div`
    color : rgb(38,198,249);
    background-color : rgb(38,198,249,0.12);
    padding : 3px 5px;
    border-radius : 3px;
    font-size : 14px;
`;
export const Delivered = styled.div` 
    color : rgb(102,108,255);
    background-color : rgb(102,108,255,0.12);
    padding : 3px 5px;
    border-radius : 3px;
    font-size : 14px;
`;
//Order detail
export const PendingOrder = styled.span`
    color : rgb(253,181,10);
    background-color : rgb(253,181,40,0.12);
    padding : 3px 5px;
    border-radius : 3px;
    font-weight: bold;
    font-size : 14px;
`;
export const DispatchedOrder = styled.span`
    font-weight: bold;
    color : rgb(38,198,249);
    background-color : rgb(38,198,249,0.12);
    padding : 3px 5px;
    border-radius : 3px;
    font-size : 14px;
`;
export const DeliveredOrder = styled.span` 
    color : rgb(102,108,255);
    background-color : rgb(102,108,255,0.12);
    font-weight: bold;
    padding : 3px 5px;
    border-radius : 3px;
    font-size : 14px;
`;

export const ItemsOrder = styled.div`
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
`;
export const ItemOrder = styled.div` 
    margin : 0.5rem 0 0.5rem 0;
`;



export const OrdersContainer = styled.div`
    max-width : 500px;
    width: 100%;
    height: auto;
    border-radius : 5px;
    padding: 2rem;
    box-shadow : rgba(100,100,111,0.2) 0px 7px 29px 0px;
    margin-top: 25px;
`;
export const StyledOrder = styled.div` 
    margin: 3rem;
    display: flex;
    justify-content : center;
    h3{
        margin : 1.5rem 0 0.5rem 0;
    }
`;

export const Report = styled.button`
    padding : 10px 15px;
    color: red;
    background-color : lightgrey;
    position : absolute;
    bottom : 20px;
    right : 50px;
    border : none;
    outline : none; 
    cursor: pointer;
    border-radius : 4px;
`;

//User

export const Admin = styled.div`
    font-weight: bold;
    color : rgb(38,198,249);
    background-color : rgb(38,198,249,0.12);
    padding : 3px 5px;
    border-radius : 3px;
    font-size : 14px;
`;
export const Customer = styled.div` 
    font-weight: bold;
    color : rgb(128,18,249);
    background-color : rgb(128,18,249,0.12);
    padding : 3px 5px;
    border-radius : 3px;
    font-size : 14px;
`;


/*
export const name = styled.div`

`;
export const name = styled.div` 

`;

*/