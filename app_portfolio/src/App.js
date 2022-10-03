import React, { Component }  from 'react';
import Navbar from './navbar';
import Hero from './hero';
import {About} from './about';
import styled, { createGlobalStyle } from "styled-components";
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import UniQuiz from './UniQuiz';
import WallPlanner from './WallPlanner';
import SafetyVR from './SafetyVR';
import Dumpling from './Dumpling';
import Mirow from './Mirow';
import LinesRight from './LinesRight';
import Contact from './Contact';

function App() { 
  return (
    <ParallaxProvider>
      <AppContainer>
        <GlobalStyle />
        <Navbar/>
        <LinesRight/>
        <Hero/>
        <About/>
        <SafetyVR/>
        <WallPlanner/>
        <UniQuiz/>
        <Dumpling/>
        <Mirow/>
        <Contact/>
      </AppContainer>
    </ParallaxProvider>
  );
}

const GlobalStyle = createGlobalStyle `
body {
  background-color: #161616;
  min-height: 100vh;
  margin: 0;
}
`;

const AppContainer = styled.div`
`;

export default App;
