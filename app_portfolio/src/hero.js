import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";

function Hero (props) {
    const {scrollY} = useWindowScrollPosition();  
    let scrollHeader = 1;
        if (10/scrollY > 0.05) {
            scrollHeader = 10/scrollY;
        }
        else {
            scrollHeader = 0;
        }
    return (
        <HeroContainer>
            {console.log(scrollHeader)}
            <ErikTitle opacity={scrollHeader}>Erik Meurk</ErikTitle>
        </HeroContainer>
    )
}


const HeroContainer = styled.div`
    width: 50%;
    display: inline-flex;
    margin-top: 10px;
    text-align: center;
    height: 100vh;
`;

const ErikTitle = styled.h1`
    color: white;
    margin: auto;
    opacity: ${props => props.opacity};
`;



export default Hero;