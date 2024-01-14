import React from 'react';
import styled from "styled-components/macro";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Footer (props) {
    return (
        <ContentContainer>
            <AnimationOnScroll animateIn="animate__bounceInLeft" offset="0">
                <ProjectDescription>Developed in React v18.2.0 by Erik Meurk</ProjectDescription>
            </AnimationOnScroll>
        </ContentContainer>
    )
}
const ContentContainer = styled.div`
    width: 100%;
    background-color: white ;
`;

const ProjectDescription = styled.h2`
    text-align: center;
    color: #161616!important;
    letter-spacing: 1px;
    font-family: Montserrat;
    line-height: 25px;
    font-weight: 700;   
    font-size: 0.8em;
`;
export default Footer;