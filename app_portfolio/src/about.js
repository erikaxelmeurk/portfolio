import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown';
import { StateModel } from './index.js';

function About (props) {
    const AboutRef = useRef();
    const [AboutPos, setAboutPos] = useState();
    const [ArrowOpacity, setArrowOpacity] = useState();

    
    const getPosition = () => {
        const BoxPos = (AboutRef.current.getBoundingClientRect().bottom - ((AboutRef.current.getBoundingClientRect().bottom - AboutRef.current.getBoundingClientRect().y))/2)
        const AboutPos1 = ((window.innerHeight) - (BoxPos)) / (0.5 * window.innerHeight);
        const AboutPos2 = BoxPos / (0.5 * window.innerHeight);
        if (AboutRef.current.getBoundingClientRect().bottom < 0 && !StateModel.thirdSection) {
            StateModel.setSecondSection(true);
            StateModel.setFirstSection(false);
        }

        else if (StateModel.thirdSection){
            StateModel.setSecondSection(false);
            StateModel.setFirstSection(false);
        }
        else {
            StateModel.setSecondSection(false);
            StateModel.setFirstSection(true);
        }
        if (AboutPos1 < 1) {
            setAboutPos(AboutPos1);
            setArrowOpacity(1);
        }
        else {
            setAboutPos(AboutPos2);
            setArrowOpacity(AboutPos2);
        }

    };
    useEffect(() => {
        getPosition();
        }, []);

    useEffect(() => {
        window.addEventListener("scroll", throttle(getPosition, 50));
        }, []);
        
    return (
        <ContentContainer>
            <TextContainer>
                <AboutText ref = {AboutRef} opacity={AboutPos}>
                    Hi! I’m a 5th year M.Sc. student at KTH currently doing my masters in Interactive Media Technology. <br></br><br></br>
                    I would describe myself as a spider in the web as I’m interested in most things, but <UnderLine>UX</UnderLine>, <UnderLine>front-end</UnderLine> and <UnderLine>VR</UnderLine> are my biggest passions. <br></br><br></br>
                    I’m currently looking to do a master’s thesis in VR. Check out my portfolio below and let’s get in touch!
                </AboutText>
            </TextContainer>
                
            <ReadMoreContainer opacity={AboutPos}>
                <ReadMore>view projects</ReadMore>
            </ReadMoreContainer>    
            <ArrowIcon opacity ={ArrowOpacity}></ArrowIcon>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10%;
`;


const TextContainer = styled.div`
    width: 450px;
    display: flex;
    margin: auto;
    align-self: center;
`;

const AboutText = styled.h2`
    color: #FFFFFF;
    letter-spacing: 2px;
    font-family: Montserrat; 
    font-weight: 600;
    font-size: 15px;
    color: white;
    opacity: ${props => props.opacity};
`;

const UnderLine = styled.span`
    text-decoration: underline #E38800;
    text-decoration-thickness: 2px;
`; 

const ReadMoreContainer = styled.div`
    display:flex;
    position: fixed;
    bottom: 40px;
    align-self: center;
    left: 18%;
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
  bottom: 4%;
  left: 28%;
  opacity: ${props => props.opacity};
`

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

export {About};