import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import {ProjectDescriptionCSS} from './styledComponents';
import EmailIcon from "./images/email.png";
import LinkedinIcon from "./images/LinkedinIcon.png";
import InstagramIcon from "./images/ig.png";
import GithubIcon from "./images/GithubIcon.png";
import {PrimaryButton} from './styledComponents';
import { StateModel } from './index.js';

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

function Contact (props) {  
    const TextAndButtonContainerRef = useRef();
    const getPosition = () => {
        if(TextAndButtonContainerRef.current.getBoundingClientRect().top < window.innerHeight) {
            StateModel.setThirdSection(true);
        }
        else {
            StateModel.setThirdSection(false);
        }
    };
    useEffect(() => {
        getPosition();
        }, []);

    useEffect(() => {
        window.addEventListener("scroll", throttle(getPosition, 5));
        }, []);
        
    return (
        <ContentContainer>
            <HeroContainer>
                <TextAndButtonContainer ref = {TextAndButtonContainerRef}>
                    <TextContainer>
                        <ErikHero>Let's connect!</ErikHero>
                    </TextContainer>
                    <ContactBtn>contact</ContactBtn>
                </TextAndButtonContainer>
            </HeroContainer>
            <ContactSocialsContainer>
                <ListSocialsContainer>
                    <Email>
                            <EmailIconImg src={EmailIcon} href="mailto:erikaxelmeurk@gmail.com" width="5%" height="5%"></EmailIconImg>
                            <LinkTo href="mailto:erikaxelmeurk@gmail.com" target="_blank">
                                <p>erikaxelmeurk@gmail.com</p>
                            </LinkTo>
                    </Email>
                    
                    <LinkedIn>
                        <LinkedInIcon src={LinkedinIcon} width="5%" height="5%"></LinkedInIcon>
                        <LinkTo href ="https://www.linkedin.com/in/erikmeurk/" target="_blank">
                            <p>/erikmeurk</p>
                        </LinkTo>
                    </LinkedIn>
                    <Instagram>
                        <InstagramIconImg src={InstagramIcon} width="5%" height="5%"></InstagramIconImg>
                        <LinkTo href="https://www.instagram.com/erikaxelmedia/" target="_blank">
                            <p>/erikaxelmedia</p>
                        </LinkTo>
                    </Instagram>
                    <Github>
                        <GithubImg src={GithubIcon} width="5%" height="5%"></GithubImg>
                        <LinkTo href="https://github.com/erikaxelmeurk" target="_blank">
                            <p>/erikaxelmeurk</p>
                        </LinkTo>
                    </Github>
                </ListSocialsContainer>
            </ContactSocialsContainer>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

const ContactSocialsContainer = styled.div`
    width: 40%;
    flex-direction: column;
    align-self: center;
`;

const ListSocialsContainer = styled.div`
    align-self: center;
    width: 70%;
    > * {
        margin: 10px;
      }
`

const Email = styled.div`
    ${ProjectDescriptionCSS}
    display: flex;
    flex-direction: row;
        > * {
        padding: 5px;
      }
`;

const LinkTo = styled.a`
    display: flex;
    text-decoration: none;
    color: #FFFFFF;
    target="_blank"
`;

const EmailIconImg = styled.img`
    display: flex;
    margin-top: 3px;
`

const LinkedIn = styled.div`
    ${ProjectDescriptionCSS}
    display: flex;
    flex-direction: row;
    > * {
        padding: 5px;
      }
`;

const LinkedInIcon = styled.img`
    display: flex;
    margin-top: 2px;
`

const Instagram = styled.div`
    ${ProjectDescriptionCSS}
    display: flex;
    flex-direction: row;
    > * {
        padding: 5px;
      }
`;

const InstagramIconImg = styled.img`
    display: flex;
    margin-top: 3px;
`

const Github = styled.div`
    ${ProjectDescriptionCSS}
    display: flex;
    flex-direction: row;
    > * {
        padding: 5px;
      }
`;

const GithubImg = styled.img`
    display: flex;
    margin-top: 3px;
`


const HeroContainer = styled.div`
    width: 60%;
    display: flex;
    align-self: center;
    flex-direction: column;
`;


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
    margin-top: 30px;
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


const ContactBtn = styled.button`
    ${PrimaryButton}
`;



export default Contact;