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
        console.log("inne i getPost"); 
        setTimeout(() => {
            const HeroNamePos = HeroNameRef.current.getBoundingClientRect().y / HeroNameRef.current.offsetTop;
            const HeroTitlesPos = HeroTitlesRef.current.getBoundingClientRect().y / HeroTitlesRef.current.offsetTop;
            const HeroButtonPos = HeroButtonRef.current.getBoundingClientRect().y / HeroButtonRef.current.offsetTop;
    
            setErikHeroNamePos(HeroNamePos);
            setHeroTitles(HeroTitlesPos);
            setHeroButtonPos(HeroButtonPos);
        }, 50);

    };

    useEffect(() => {
        getPosition();
        }, []);

    useEffect(() => {
        console.log("inne i useffect"); 
        window.addEventListener("scroll", getPosition);
        return () => window.removeEventListener("scroll", getPosition);
        }, []);
        
    return (
        <ContentContainer>
            <HeroContainer>
                <TextAndButtonContainer opacity={HeroButtonPos}>
                    <TextContainer>
                        <ErikHero ref = {HeroNameRef} opacity={HeroNamePos}>Erik Meurk</ErikHero>
                        <ErikTitles ref = {HeroTitlesRef} opacity={HeroTitlesPos}>UX/VR/Front-End</ErikTitles>
                    </TextContainer>
                    <LinkTo href="mailto:erikaxelmeurk@gmail.com" target="_blank"><Contact ref = {HeroButtonRef} opacity={HeroButtonPos}>contact</Contact></LinkTo>
                </TextAndButtonContainer>
            <ReadMoreContainer opacity={HeroNamePos}>
                <ReadMore>read more</ReadMore>
            </ReadMoreContainer>
            </HeroContainer>
                <ImgContainer>
                    <ImgErik opacity={HeroNamePos}>
                        <img src={ErikProfil} alt="Erik Profilbild"width="100%"></img>
                    </ImgErik> 
                </ImgContainer>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

const ImgContainer = styled.div`
    width: 40%;
    flex-direction: column;
    opacity: ${props => props.opacity};
`;

const ImgErik = styled.div`
    animation: 2s ${fadeInAnimation};
    align-self: center;
    width: 70%;
    margin-top: 100px;
    opacity: ${props => props.opacity};
`

const HeroContainer = styled.div`
    width: 60%;
    display: flex;
    align-self: center;
    flex-direction: column;
`;


const ReadMoreContainer = styled.div`
    display:flex;
    position: fixed;
    bottom: 40px;
    align-self: center;
    left: 20%;
    opacity: ${props => props.opacity};
`
const ReadMore = styled.p`
    align-self: flex-end;
    letter-spacing: 2px;    
    font-family: Montserrat;      
    font-weight: 500;
    font-size: 15px;
    color: white;
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