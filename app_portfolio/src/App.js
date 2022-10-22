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
import Dumpling from './Dumpling';
import Mirow from './Mirow';
import LinesRight from './LinesRight';
import Photography from './photography';
import Contact from './Contact';
import Theme from "./Theme";
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
                      <SafetyVR/>
                      <WallPlanner/>
                      <UniQuiz/>
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
            </AppContainer>
          </Router>
      </ParallaxProvider>
    </Theme>
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
