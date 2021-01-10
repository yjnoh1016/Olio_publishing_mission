import React from 'react';
import styled from 'styled-components';
import facebook from './images/facebook.png';
import google from './images/google.png';

const SNSBtn = styled.div `
position: absolute;
width: 460px;
height: 35px;
left: 270px;
top: 471px;

border: 2px solid #000000;
box-sizing: border-box;
`;
const Line = styled.hr`
position: absolute;
width: 0px;
height: 30px;
left: 499px;
top: 464px;

border: 2px solid #000000;
`;
const FB =  styled.div `
img{
    position: absolute;
    left: 32.7%;
    right: 66.5%;
    top: 79.77%;
    bottom: 17.58%;
  }
button{
    position: absolute;
    left: 34.6%;
    right: 57.3%;
    top: 80.27%;
    bottom: 17.74%;
  
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
  
    border: 0;
    outline: 0;
    background-color: #FFFFFF;
    /* identical to box height */
  
    text-align: right;
  
    color: #000000;
  }
`;
const GG =  styled.div `
img{
    position: absolute;
    width: 16px;
    height: 16px;
    left: 571px;
    top: 481px;
  }
button{
    position: absolute;
    left: 59.8%;
    right: 33.8%;
    top: 80.27%;
    bottom: 17.74%;
  
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
  
    border: 0;
    outline: 0;
    background-color: #FFFFFF;
  
    /* identical to box height */
  
    text-align: right;
  
    color: #000000;
  }
`;

function SNSButton() {
    return(
        <div>
            <SNSBtn/>
            <Line/>
            <FB>
                <img src={facebook} alt='facebook'/>
                <button>페이스북로 회원가입</button>
            </FB>
            <GG>
                <img src={google} alt='google'/>
                <button>구글로 회원가입</button>
            </GG>
        </div>
    );
}

export default SNSButton;