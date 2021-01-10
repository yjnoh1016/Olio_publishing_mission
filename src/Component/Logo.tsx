import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';

const ONDOLogo = styled.div`
position: absolute;
width: 54px;
height: 78px;
left: 473px;
top: 35px;
`;

function Logo() {
    return(
        <ONDOLogo>
            <img src={logo} alt='logo'></img>
        </ONDOLogo>
    );
}


export default Logo;