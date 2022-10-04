import React from 'react';
import { Icon, Percentage, StyledWidget, Text } from '../../../CommonStyled';

const Widget = ({ data }) => {
    return (
        <StyledWidget>
            <Icon color={data.color} bgColor={data.bgColor}>
                {data.icon}
            </Icon>
            <Text>
                <h3>
                    {data.isMoney ? "$" + data.digits?.toLocaleString() : data.digits?.toLocaleString()}
                </h3>
                <p>{data.title}</p>
            </Text>
            {data.percentage < 0 ?
                <>
                    <Percentage isPosition={false}>{Math.floor(data.percentage) + "%"}</Percentage>
                </> :
                <>
                    <Percentage isPosition={true}>{Math.floor(data.percentage) + "%"}</Percentage>
                </>}
        </StyledWidget>
    );
};

export default Widget;