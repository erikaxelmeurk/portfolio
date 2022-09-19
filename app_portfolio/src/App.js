import React, { Component }  from 'react';
import Navbar from './navbar';
import Hero from './hero';
import styled, { createGlobalStyle } from "styled-components";
import './App.css';

function App() { 
  return (
      <AppContainer>
        <GlobalStyle />
        <Navbar/>
        <Hero></Hero>
      </AppContainer>
  );
}

const GlobalStyle = createGlobalStyle `
body {
  background-color: #161616;
  min-height: 100vh;
}
`;

const AppContainer = styled.div`
`;

export default App;
