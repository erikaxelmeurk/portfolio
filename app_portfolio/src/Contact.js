import React, { useRef, useEffect } from 'react';
import styled from "styled-components/macro";
import {ProjectDescriptionCSS} from './styledComponents';
import EmailIcon from "./images/email.png";
import LinkedinIcon from "./images/LinkedinIcon.png";
import InstagramIcon from "./images/ig.png";
import GithubIcon from "./images/GithubIcon.png";
import {PrimaryButton} from './styledComponents';
import { StateModel } from './index.js';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Contact (props) {  
    const TextAndButtonContainerRef = useRef();
    const getPosition = () => {
        setTimeout(() => {
            const TextAndButtonContainerRefTop = TextAndButtonContainerRef.current.getBoundingClientRect().top;
            if(TextAndButtonContainerRefTop < window.innerHeight && TextAndButtonContainerRefTop > 0) {
                StateModel.setForthSection(true);
            }
            else if (TextAndButtonContainerRefTop > window.innerHeight && TextAndButtonContainerRefTop > 0 && !StateModel.secondSection && !StateModel.firstSection && StateModel.forthSection){
                StateModel.setForthSection(false);
                StateModel.setThirdSection(true);
            }
        }, 50);
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
            <HeroContainer>
                <TextAndButtonContainer ref = {TextAndButtonContainerRef}>
                    <TextContainer>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><ErikHero>Let's connect!</ErikHero></AnimationOnScroll>
                    </TextContainer>
                    <LinkTo href="mailto:erikaxelmeurk@gmail.com" target="_blank"><AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><ContactBtn>contact</ContactBtn></AnimationOnScroll></LinkTo>
                </TextAndButtonContainer>
            </HeroContainer>
            <ContactSocialsContainer>
                <ListSocialsContainer>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <Email>
                                <EmailIconImg src={EmailIcon} href="mailto:erikaxelmeurk@gmail.com" width="5%" height="5%"></EmailIconImg>
                                <LinkTo href="mailto:erikaxelmeurk@gmail.com" target="_blank">
                                    <p>erikaxelmeurk@gmail.com</p>
                                </LinkTo>
                        </Email>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <LinkedIn>
                            <LinkedInIcon src={LinkedinIcon} width="5%" height="5%"></LinkedInIcon>
                            <LinkTo href ="https://www.linkedin.com/in/erikmeurk/" target="_blank">
                                <p>/erikmeurk</p>
                            </LinkTo>
                        </LinkedIn>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <Instagram>
                            <InstagramIconImg src={InstagramIcon} width="5%" height="5%"></InstagramIconImg>
                            <LinkTo href="https://www.instagram.com/erikaxelmedia/" target="_blank">
                                <p>/erikaxelmedia</p>
                            </LinkTo>
                        </Instagram>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <Github>
                            <GithubImg src={GithubIcon} width="5%" height="5%"></GithubImg>
                            <LinkTo href="https://github.com/erikaxelmeurk" target="_blank">
                                <p>/erikaxelmeurk</p>
                            </LinkTo>
                        </Github>
                    </AnimationOnScroll>
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