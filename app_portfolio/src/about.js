import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components/macro";
import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown';
import { StateModel } from './index.js';

function About (props) {
    const AboutRef = useRef();
    const [AboutPos, setAboutPos] = useState();
    const [ArrowOpacity, setArrowOpacity] = useState();

    const getPosition = () => {
        setTimeout(() => {
            const BoxPos = (AboutRef.current.getBoundingClientRect().bottom - ((AboutRef.current.getBoundingClientRect().bottom - AboutRef.current.getBoundingClientRect().y))/2);
            const windowHeight = window.innerHeight;
            const AboutPos1 = ((windowHeight) - (BoxPos)) / (0.5 * windowHeight);
            const AboutPos2 = BoxPos / (0.5 * windowHeight);

            if (BoxPos < windowHeight && BoxPos > 0) {
                StateModel.setSecondSection(true);
                StateModel.setFirstSection(false);
                StateModel.setThirdSection(false);
            }

            else if (BoxPos > windowHeight && BoxPos > 0 && !StateModel.secondSection) {
                StateModel.setSecondSection(false);
                StateModel.setFirstSection(true);
            }

            else if (BoxPos > windowHeight && BoxPos > 0 && StateModel.secondSection) {
                StateModel.setSecondSection(false);
                StateModel.setFirstSection(true);
            }

            else if (BoxPos < 0 && StateModel.secondSection) {
                StateModel.setThirdSection(true);
                StateModel.setSecondSection(false);
            }

            else if (BoxPos < 0 && StateModel.forthSection) {
                StateModel.setThirdSection(false);
            }

            if (AboutPos1 < 1) {
                setAboutPos(AboutPos1);
                setArrowOpacity(1);
            }
            else {
                setAboutPos(AboutPos2);
                setArrowOpacity(AboutPos2);
            }

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
            <TextContainer>
                <AboutText ref = {AboutRef} opacity={AboutPos}>
                    Hi! I’m a 5th year M.Sc. student at KTH currently doing my masters in Interactive Media Technology. <br></br><br></br>
                    I would describe myself as a spider in the web as I’m interested in most things, but <UnderLine>XR</UnderLine>, <UnderLine>UX</UnderLine> and <UnderLine>Front-end</UnderLine> are my biggest passions. <br></br><br></br>
                    I’m currently doing my master's thesis at Resolution Games about three-dimensional locomotion. Have a look at my portfolio below and let’s get in touch!
                </AboutText>
            </TextContainer>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10%;
    @media (max-width: 926px) {
        margin-top: 150px;
        width: 100%;
    }   
`;


const TextContainer = styled.div`
    width: 450px;
    display: flex;
    margin: auto;
    align-self: center;
    @media (max-width: 926px) {
        width: 350px;
        margin: 0;
    }   
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
`

const ArrowIcon = styled(ArrowDown)`
  color: #E38800;
  width: 27px;
  height: 27px;
  position: fixed;
  border: solid;
  border-color: #FFFFFF;
  border-radius: 100%;
  padding: 2px;
  bottom: 5%;
  left: 29%;
  opacity: ${props => props.opacity};
  @media (max-width: 865px) {
        display:none;
    }   
`

export {About};