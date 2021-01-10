import React from 'react';
import styled from 'styled-components';

const Title = styled.h1 `
position: absolute;
width: 295px;
height: 92px;
left: 352px;
top: 137px;

font-family: Apple SD Gothic Neo;
font-style: normal;
font-weight: 100;
font-size: 10px;
line-height: 12px;
text-align: center;

color: #000000;
`;

const Sub = styled.p `
font-size: 20px;
line-height: 24px;
`;

function Header(){
    return(
        <Title>
        ON: 계속<br/>
        DO: 하다<br/>
            <Sub>
                <br/>당신의 감정온도를 기록하세요
            </Sub>
        </Title>
    );
}

export default Header;