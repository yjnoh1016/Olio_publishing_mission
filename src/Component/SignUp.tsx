import React from 'react';
import styled from 'styled-components';

const Email = styled.div `
span{
position: absolute;
width: 52px;
height: 24px;
left: 270px;
top: 271px; 

font-family: Apple SD Gothic Neo;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
/* identical to box height */

text-align: center;

color: #000000;
}

input{
    position: absolute;
    width: 320px;
    height: 24px;
    left: 400px;
    top: 271px;
  
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-size: 15px;
    line-height: 24px;
  
    border: 0;
    text-align: center;
  }

hr{
    position: absolute;
    width: 460px;
    height: 0px;
    left: 270px;
    top: 302px;
  
    border: 3px solid #000000;
  }
`;

const Pw = styled.div `
span{
    position: absolute;
    width: 70px;
    height: 24px;
    left: 270px;
    top: 337px;
  
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
  
    text-align: center;
  
    color: #000000;
  }
input{
    position: absolute;
    width: 320px;
    height: 24px;
    left: 400px;
    top: 337px;
  
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-size: 15px;
    line-height: 24px;
  
    border: 0;
    text-align: center;
  }
hr{
    position: absolute;
    width: 460px;
    height: 0px;
    left: 270px;
    top: 368px;
  
    border: 3px solid #000000;
  }
`;
const CheckPw = styled.div `
span{
    position: absolute;
    width: 110px;
    height: 24px;
    left: 270px;
    top: 396px;
  
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
  
    text-align: center;
  
    color: #000000;
  }
input{
    position: absolute;
    width: 320px;
    height: 24px;
    left: 400px;
    top: 396px;
  
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-size: 15px;
    line-height: 24px;
  
    border: 0;
    text-align: center;
  }
hr{
    position: absolute;
    width: 460px;
    height: 0px;
    left: 270px;
    top: 427px;
  
    border: 3px solid #000000;
  }
  
`;

function SignUp(){
    return(
        <div>
            <Email>
                <span>이메일</span>
                <input type = "email" name = "email"></input>
                <hr/>
            </Email>
            <Pw>
                <span>비밀번호</span>
                <input type = "password" name = "pw"></input>
                <hr/>
            </Pw>
            <CheckPw>
                <span>비밀번호 확인</span>
                <input type = "password" name = "checkPw"></input>
                <hr/>
            </CheckPw>
        </div>
    );
}

export default SignUp;