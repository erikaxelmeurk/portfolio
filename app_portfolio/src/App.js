import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import {About} from './about';
import styled, { createGlobalStyle } from "styled-components/macro";
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import UniQuiz from './UniQuiz';
import WallPlanner from './WallPlanner';
import SafetyVR from './SafetyVR';
import ElfMyself from './ElfMyself';
import Dumpling from './Dumpling';
import PartyPopper from './PartyPopper';
import Mirow from './Mirow';
import LinesRight from './LinesRight';
import Photography from './photography';
import Contact from './Contact';
import Theme from "./Theme";
import Footer from "./Footer";
import Momentous from "./Momentous";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() { 
  return (
    <Theme>
      <ParallaxProvider>
        <GlobalStyle />
          <Router>
            <AppContainer>
            <Navbar/>
              <Routes>
                  <Route path="/" element={
                    <div>
                      <LinesRight/>
                      <Hero/>
                      <About/>
                      <UniQuiz/>
                      <Momentous/>
                      <PartyPopper/>
                      <ElfMyself/>
                      <SafetyVR/>
                      <WallPlanner/>
                      <Dumpling/>
                      <Mirow/>
                      <Contact/>
                    </div>}>
                  </Route>
                  <Route path="/photography" element={
                    <div>
                      <Photography></Photography>
                    </div>}>
                  </Route>
              </Routes>
              <Footer></Footer>
            </AppContainer>
          </Router>
      </ParallaxProvider>
    </Theme>
  );
}

const GlobalStyle = createGlobalStyle `
body {
  background: linear-gradient(-45deg, #161616,#161616, #0E0E0E, #161616);
  min-height: 100vh;
  animation: gradient 15s ease infinite;
  margin: 0;
  
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;

const AppContainer = styled.div`
  overflow-x: hidden ;
`;

export default App;
