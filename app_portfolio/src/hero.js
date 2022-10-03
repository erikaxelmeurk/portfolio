import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import ErikProfil from "./images/ErikProfil.jpg";
import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown';
import ScrollAnimation from 'react-animate-on-scroll';
import {PrimaryButton} from './styledComponents';
import {StateModel} from "./index.js";
import useModelProp from "./useModelProp.js"

function throttle (callbackFn, limit) {
    let wait = false;                  
    return function () {              
        if (!wait) {                  
            callbackFn.call();           
            wait = true;               
            setTimeout(function () {   
                wait = false;          
            }, limit);
        }
    }
}

function Hero (props) {
    const HeroNameRef = useRef();
    const HeroTitlesRef = useRef();
    const HeroButtonRef = useRef();
    const [HeroNamePos, setErikHeroNamePos] = useState();
    const [HeroTitlesPos, setHeroTitles] = useState();
    const [HeroButtonPos, setHeroButtonPos] = useState();
    const getPosition = () => {
        const HeroNamePos = HeroNameRef.current.getBoundingClientRect().y / HeroNameRef.current.offsetTop;
        const HeroTitlesPos = HeroTitlesRef.current.getBoundingClientRect().y / HeroTitlesRef.current.offsetTop;
        const HeroButtonPos = HeroButtonRef.current.getBoundingClientRect().y / HeroButtonRef.current.offsetTop;

        setErikHeroNamePos(HeroNamePos);
        setHeroTitles(HeroTitlesPos);
        setHeroButtonPos(HeroButtonPos);

    };
    useEffect(() => {
        getPosition();
        }, []);

    useEffect(() => {
        window.addEventListener("scroll", throttle(getPosition, 50));
        }, []);
        
    return (
        <ContentContainer>
            <HeroContainer>
                <TextAndButtonContainer opacity={HeroButtonPos}>
                    <TextContainer>
                        <ErikHero ref = {HeroNameRef} opacity={HeroNamePos}>Erik Meurk</ErikHero>
                        <ErikTitles ref = {HeroTitlesRef} opacity={HeroTitlesPos}>UX/VR/Front-End</ErikTitles>
                    </TextContainer>
                    <Contact ref = {HeroButtonRef} opacity={HeroButtonPos}>contact</Contact>
                </TextAndButtonContainer>
            <ReadMoreContainer opacity={HeroNamePos}>
                <ReadMore>read more</ReadMore>
            </ReadMoreContainer>
            </HeroContainer>
                <ImgContainer>
                    <ImgErik opacity={HeroNamePos}>
                        <img src={ErikProfil} width="100%"></img>
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

const ArrowIcon = styled(ArrowDown)`
  color: #E38800;
  width: 30px;
  height: 30px;
  position: fixed;
  border: solid;
  border-color: #FFFFFF;
  border-radius: 100%;
  padding: 2px;
  bottom: 5%;
  left: 28%;
  opacity: ${props => props.opacity};
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextAndButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-auto;
    align-self: center;
    border-left: solid 2px;
    padding-left: 70px;
    padding-top: 15x;
    padding-bottom: 15px;
    border-color: white;
    opacity: ${props => props.opacity};
`;

const ErikHero = styled.h1`
    letter-spacing: 7px;    
    font-family: Lato;      
    font-weight: 500;
    font-size: 50px;
    color: white;
    opacity: ${props => props.opacity};
`;

const ErikTitles = styled.h2`
    color: #FFFFFF;
    letter-spacing: 5px;
    font-family: Montserrat; 
    font-weight: 400;
    font-size: 15px;
    color: white;
    opacity: ${props => props.opacity};
`;

const Contact = styled.button`
    ${PrimaryButton}
`;

export default Hero;