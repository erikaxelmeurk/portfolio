import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";

function About (props) {
    const HeroTitlesRef = useRef();
    const [HeroTitlesPos, setHeroTitles] = useState();
    const getPosition = () => {
        const HeroTitlesPos1 = (0.5 * window.innerHeight) / (HeroTitlesRef.current.getBoundingClientRect().bottom - (HeroTitlesRef.current.getBoundingClientRect().bottom - HeroTitlesRef.current.getBoundingClientRect().y)/2);
        const HeroTitlesPos2 = (HeroTitlesRef.current.getBoundingClientRect().bottom - (HeroTitlesRef.current.getBoundingClientRect().bottom - HeroTitlesRef.current.getBoundingClientRect().y)/2) / (0.5 * window.innerHeight);
        if (HeroTitlesPos1 < 1) {
            setHeroTitles(HeroTitlesPos1);
        }
        else {
            setHeroTitles(HeroTitlesPos2);
        }

    };
    useEffect(() => {
        getPosition();
        }, []);

    useEffect(() => {
        window.addEventListener("scroll", getPosition);
        }, []);
        
    return (
        <ContentContainer>
                <TextContainer>
                    <ErikTitles ref = {HeroTitlesRef} opacity={HeroTitlesPos}>
                        Hi! I’m a 25 year old M.Sc. student at KTH currently doing my masters in Interactive Media Technology. <br></br><br></br>
                        I would describe myself as a spider in the web as I’m interested in most things, but <UnderLine>programming</UnderLine>, <UnderLine>UX</UnderLine> and <UnderLine>VR</UnderLine> are my biggest passions. <br></br><br></br>
                        I’m currently looking to do a master’s thesis. Check out my portfolio below and let’s get in touch!
                    </ErikTitles>
                </TextContainer>
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

const ErikTitles = styled.h2`
    color: #FFFFFF;
    letter-spacing: 3px;
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


export {About};