import React from 'react';
import styled from 'styled-components';

const Already = styled.button `
position: absolute;
width: 135px;
height: 17px;
left: 29px;
top: 562px;

font-family: Apple SD Gothic Neo;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;

border: 0;
outline: 0;
background-color: #FFFFFF;

/* identical to box height */

text-align: center;

color: #000000;
`;

const SignUp = styled.button `
position: absolute;
width: 171px;
height: 61px;
left: 829px;
top: 542px;

background: #000000;
border-radius: 30px 0px 0px 0px;
border: 0;
ouline: 0;

font-family: Apple SD Gothic Neo;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 24px;
/* identical to box height */

color: #FFFFFF;
`;

function UnderBtn(){
    return(
        <div>
            <Already>
                이미 계정이 있으신가요?
            </Already>
            <SignUp>
                회원가입
            </SignUp>
        </div>
    );
}

export default UnderBtn;