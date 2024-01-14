import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components/macro";
import ErikProfil from "./images/ErikProfil.jpg";
import {PrimaryButton} from './styledComponents';
import { fadeIn, fadeInLeftBig } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInLeftBigAnimation = keyframes`${fadeInLeftBig}`;


function Hero (props) {
    const HeroNameRef = useRef();
    const HeroTitlesRef = useRef();
    const HeroButtonRef = useRef();
    const [HeroNamePos, setErikHeroNamePos] = useState();
    const [HeroTitlesPos, setHeroTitles] = useState();
    const [HeroButtonPos, setHeroButtonPos] = useState();

    const getPosition = event => {
        setTimeout(() => {
            const HeroNamePos = HeroNameRef.current.getBoundingClientRect().y / HeroNameRef.current.offsetTop;
            const HeroTitlesPos = HeroTitlesRef.current.getBoundingClientRect().y / HeroTitlesRef.current.offsetTop;
            const HeroButtonPos = HeroButtonRef.current.getBoundingClientRect().y / HeroButtonRef.current.offsetTop;
    
            setErikHeroNamePos(HeroNamePos);
            setHeroTitles(HeroTitlesPos);
            setHeroButtonPos(HeroButtonPos);
        }, 100);

    };

    useEffect(() => {
        getPosition();
        }, []);

    useEffect(() => {
        window.addEventListener("scroll", getPosition);
        return () => window.removeEventListener("scroll", getPosition);
        }, []);
        
    return (
        <ContentContainer>
            <ResponsiveContainer>
            <HeroContainer>
                <TextAndButtonContainer opacity={HeroButtonPos}>
                    <TextContainer>
                        <ErikHero ref = {HeroNameRef} opacity={HeroNamePos}>Erik Meurk</ErikHero>
                        <ErikTitles ref = {HeroTitlesRef} opacity={HeroTitlesPos}>XR/UX/Front-End</ErikTitles>
                    </TextContainer>
                    <LinkTo href="mailto:erikaxelmeurk@gmail.com" target="_blank"><Contact ref = {HeroButtonRef} opacity={HeroButtonPos}>contact</Contact></LinkTo>
                </TextAndButtonContainer>
            </HeroContainer>
                <ImgContainer>
                    <ImgErik opacity={HeroNamePos}>
                        <img src={ErikProfil} alt="Erik Profilbild"width="100%"></img>
                    </ImgErik> 
                </ImgContainer>
            </ResponsiveContainer>
        </ContentContainer>
    )
}

const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1050px) {
        flex-direction: column;
        margin: 50px;
    }   
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;   
    @media (max-width: 1050px) {
        flex-direction: column;
        height: 100%;
    }   
`;

const ImgContainer = styled.div`
    width: 40%;
    flex-direction: column;
    opacity: ${props => props.opacity};
    @media (max-width: 1050px) {
        width: 40%;
        align-self: center;
        margin-top: 150px;
    }   
`;

const ImgErik = styled.div`
    animation: 2s ${fadeInAnimation};
    align-self: center;
    width: 70%;
    min-width: 200px;
    margin-top: 20%;
    opacity: ${props => props.opacity};
    @media (max-width: 1050px) {
        margin: auto;
        opacity: 1;
        width: 100%;
    }   
`

const HeroContainer = styled.div`
    width: 60%;
    display: flex;
    align-self: center;
    flex-direction: column;
    @media (max-width: 1050px) {
        margin-top: 200px;
        width: 100%;
    }   
`;


const ReadMoreContainer = styled.div`
    display:flex;
    position: fixed;
    bottom: 40px;
    align-self: center;
    left: 20%;
    opacity: ${props => props.opacity};
    @media (max-width: 1050px) {
        display: none;
  }    
`
const ReadMore = styled.p`
    align-self: flex-end;
    letter-spacing: 2px;    
    font-family: Montserrat;      
    font-weight: 500;
    font-size: 15px;
    color: white;
    @media (max-width: 1050px) {
        display: none;
  }    
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextAndButtonContainer = styled.div`
    animation: 1s ${fadeInAnimation};
    display: flex;
    flex-direction: column;
    align-self: center;
    border-left: solid 2px;
    padding-left: 70px;
    padding-top: 15x;
    padding-bottom: 15px;
    border-color: white;
    opacity: ${props => props.opacity};
`;

const ErikHero = styled.h1`
    animation: 1.5s ${fadeInLeftBigAnimation};
    letter-spacing: 7px;    
    font-family: Lato;      
    font-weight: 500;
    font-size: 50px;
    color: ${props => props.theme.colors.white};
    opacity: ${props => props.opacity};
`;

const ErikTitles = styled.h2`
    animation: 1.8s ${fadeInLeftBigAnimation};
    letter-spacing: 5px;
    font-family: Montserrat; 
    font-weight: 400;
    font-size: 15px;
    color: ${props => props.theme.colors.white};
    opacity: ${props => props.opacity};
`;

const Contact = styled.button`
    animation: 2s ${fadeInLeftBigAnimation};
    ${PrimaryButton}
`;

const LinkTo = styled.a`
    display: flex;
    text-decoration: none;
    color: #FFFFFF;
`;

export default Hero;