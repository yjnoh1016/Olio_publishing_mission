import React from 'react';
//import './App.css';
import { createGlobalStyle } from "styled-components";
import Logo from "./Component/Logo";
import Header from './Component/Header';
import SignUp from './Component/SignUp';
import SNSButton from './Component/SNSButton';
import UnderBtn from './Component/UnderBtn';

const ResetStyle = createGlobalStyle `
h1,p,button{
  margin: 0;
  padding: 0;
}

body{
  position: relative;
  width: 1000px;
  height: 603px;

  background: #FFFFFF;
}
`;

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <Logo></Logo>
      <Header></Header>
      <SignUp></SignUp>
      <SNSButton></SNSButton>
      <UnderBtn></UnderBtn>
    </div>
  );
}

export default App;

