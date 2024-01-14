import React, {useState, useRef} from 'react';
import styled, {keyframes} from "styled-components/macro";
import SafetyVRImg from "./images/SafetyVRImg.png";
import SafetyVRImg2 from "./images/SafetyVRImg2.png";
import {UnderLineCSS, LinkToCSS, ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnorderedListCSS} from './styledComponents';
import { fadeIn } from 'react-animations';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const fadeInAnimation = keyframes`${fadeIn}`;

function SafetyVR (props) {
    const titleRef = useRef();
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
    };

    return (
        <ContentContainer>
            <ImgContainer>
                <ImgProject src={SafetyVRImg} showImg={true}>
                </ImgProject>
                {isShown && <ImgProject src={SafetyVRImg2} showImg={false}></ImgProject>}
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                    <ProjectTitle ref={titleRef}>Women's Perceived Safety in VR</ProjectTitle>
                </AnimationOnScroll>
                
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                    <ProjectDescription>
                        Research project where we tested women’s perceived safety of the environment in a VR application using a within-subject experiment. 
                        The goal was to investigate whether VR can be a useful tool to evaluate women's safety when city planning.
                    </ProjectDescription>
                </AnimationOnScroll>
                        
                    <UnorderedList>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Unity</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>HTC Vive Pro</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Within Subject Design</li></AnimationOnScroll>
                    
                    
                    </UnorderedList>
                    {isShown && <ProjectDescriptionReadMore>
                        Based on a study made in real life where women was shown to
                        rather walk on streets with more "eyes", i.e. windows,
                        we wanted to find out if the same applied in VR.
                        To do this, we created six different street environments in Unity where our participants 
                        had to make a choice between two streets, one with solid walls and one with windows, in regards to
                        perception of safety.<br></br><br></br>

                        The results indicated that solid walls have an impact on women’s perceived safety in virtual urban environments, 
                        and that VR can be a useful tool when designing safe cities for women. You can find the full project report <LinkTo href="./pdf/SafetyVR.pdf" download="SafetyVR.pdf" target="_blank"><UnderLine>here</UnderLine></LinkTo></ProjectDescriptionReadMore>}
                    <AnimationOnScroll animateIn="fadeInUp" animateOnce="true">
                            <div>
                            <AnimationOnScroll animateIn="animate__headShake" initiallyVisible="false" animateOnce="false" duration="1.5" delay="700">
                                <ReadMore onClick={handleClick}>read {isShown ? "less": "more"}
                                </ReadMore>
                            </AnimationOnScroll>
                            </div>
                    </AnimationOnScroll>
                </TextContainer>
            </ProjectInfoContainer>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    ${ContentContainerCSS}
    @media (max-width: 926px) {
        display: flex;
        margin-top: 200px;
        flex-direction: column;
        margin-bottom: 50px;
    }   
`;

const ImgContainer = styled.div`
    ${ImgContainerCSS}
    @media (max-width: 926px) {
        margin-top: 35px;
    }   
`;

const ImgProject = styled.img`
    ${ImgProjectCSS}
    @media (max-width: 926px) {
        width: 100%;
        display: ${props => props.showImg ? "static;": "none;"};
    }   
`

const ProjectInfoContainer = styled.div`
    ${ProjectInfoContainerCSS}
    @media (max-width: 926px) {
        order: 1;
    }   
`;

const TextContainer = styled.div`
    ${TextContainerCSS}
    
`;

const ProjectTitle = styled.h1`
    ${ProjectTitleCSS}
    animation: 2s ${props => props.inView ? fadeInAnimation: ""};
`;

const ProjectDescription = styled.p`
    ${ProjectDescriptionCSS}
`;

const ProjectDescriptionReadMore = styled.p`
    ${ProjectDescriptionCSS}
    margin-bottom: 30px;
`;

const ReadMore = styled.button`
    ${SecondaryButtonCSS}
`;

const UnorderedList = styled.ul`
    ${UnorderedListCSS}
`;

const UnderLine = styled.span`
    ${UnderLineCSS};
`;

const LinkTo = styled.a`
    ${LinkToCSS};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.orange};
    display: inline;
`;



export default SafetyVR;