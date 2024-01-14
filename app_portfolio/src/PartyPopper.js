import React, {useState, useRef} from 'react';
import styled, {keyframes} from "styled-components/macro";
import SafetyVRImg from "./images/SafetyVRImg.png";
import PartyPopperImg from "./images/PartyPopperImg.png";
import ReactPlayer from "react-player";
import {VideoProjectCSS, UnderLineCSS, LinkToCSS, ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnorderedListCSS} from './styledComponents';
import { fadeIn } from 'react-animations';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const fadeInAnimation = keyframes`${fadeIn}`;

function PartyPopper (props) {
    const titleRef = useRef();
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
    };

    return (
        <ContentContainer>
            <ImgContainer>
                <VideoContainer>
                    <ReactPlayer url="https://vimeo.com/766418539" width='80%' margin="0" controls></ReactPlayer>
                    {isShown && <ImgProject src={PartyPopperImg} showImg={true}></ImgProject>}
                </VideoContainer>
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                    <ProjectTitle ref={titleRef}>Party Popper VR</ProjectTitle>
                </AnimationOnScroll>
                
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                    <ProjectDescription>
                    Party Popper is an asymmetrical multiplayer experience where two players 
                    collaborate with the joint goal to pop balloons. One player is in VR, popping 
                    balloons with the weapons of their choice. The second player is outside, sending
                     balloons to the VR player through a web interface on a tablet, steering the experience for
                     the VR player. The balloons contain a variation of visual and sonic experiences
                     which are revealed once they are popped.
                    </ProjectDescription>
                </AnimationOnScroll>
                        
                    <UnorderedList>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Unity</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Blender</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Oculus Quest 2</li></AnimationOnScroll>
                    
                    
                    </UnorderedList>
                    {isShown && <ProjectDescriptionReadMore>
                        This experience was created as a part of the course DH2413 
                        Advanced Graphics and Interaction in the autumn of 2022 and was displayed 
                        on Tekniska Museet on November 2.
                        <br></br><br></br>
                        For the balloon explosion
                        effects we mainly used particle systems 
                        with particle collisions to detect the point of intersection with 
                        the floor and walls in the room. All assets including the balloon residues, 
                        like the paint splats, the objects in the room and the tools and weapons used 
                        to interact with the balloons are created using Blender.
                        <br></br><br></br>To increase the performance in relation to the 
                        repeated instantiating and destroying of 
                        objects we used the object pool design pattern and implemented our 
                        own object pool for all of the balloon residues. We implemented our 
                        own shaders for the paint and water explosion using the Universal Render Pipeline. 
                        The interaction of the outside user was created as a deployed website 
                        on Heroku with a backend using NodeJS which sends information about 
                        which balloons to spawn to the VR interface using websockets.<br></br><br></br>

                        To read the full story about the project, follow this link <LinkTo href="https://partypoppervr.herokuapp.com/" download="SafetyVR.pdf" target="_blank"><UnderLine>here</UnderLine></LinkTo></ProjectDescriptionReadMore>}
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
        width: 400px;
        height: 320px;
    }   
`;

const ImgProject = styled.img`
    ${ImgProjectCSS}
    @media (max-width: 926px) {
        width: 100%;
        display: ${props => props.showImg ? "static;": "none;"};
    }   
`;

const UnderLine = styled.span`
    ${UnderLineCSS};
`;

const VideoContainer = styled.div`
    ${VideoProjectCSS}
    @media (max-width: 926px) {
        width: 100%;
    }   
`;

const ProjectInfoContainer = styled.div`
    ${ProjectInfoContainerCSS}
    @media (max-width: 926px) {
        order: 1;
    }   
`;

const TextContainer = styled.div`
    ${TextContainerCSS}
    margin-top: 40px;
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

const LinkTo = styled.a`
    ${LinkToCSS};
    text-decoration: underline!important;
    text-decoration-color: ${props => props.theme.colors.orange}!important;
    display: inline;
`;



export default PartyPopper;