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

function ElfMyself (props) {
    const titleRef = useRef();
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
    };

    return (
        <ContentContainer>
            <ImgContainer>
                <VideoContainer>
                    <ReactPlayer url="https://vimeo.com/783008193" width='80%' margin="0" controls></ReactPlayer>
                    {isShown && <ReactPlayer url="https://vimeo.com/782550067" width='80%' margin="0" controls></ReactPlayer>}
                </VideoContainer>
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                    <ProjectTitle ref={titleRef}>Elf & Myself VR</ProjectTitle>
                </AnimationOnScroll>
                
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                    <ProjectDescription>
                    Elf & Myself is a Christmas experience that bridges the gap 
                    between the virtual- and outside world. A VR-user steps into 
                    a cozy christmas cabin where they can decorate a tree, while 
                    an outside user takes the role of an elf that peeks into the 
                    windows of the cabin and controls their point of view through 
                    the gyroscope in a smartphone.
                    </ProjectDescription>
                </AnimationOnScroll>
                        
                    <UnorderedList>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Unity</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>XR Interaction Toolkit</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Blender</li></AnimationOnScroll>
                    
                    
                    </UnorderedList>
                    {isShown && <ProjectDescriptionReadMore>
                        This experience was created as a part of the course DH2413 
                        Advanced Graphics and Interaction in the autumn of 2022 and was displayed 
                        on VIC-studio Open House in december 2022.
                        <br></br><br></br>
                        One of the motivations behind Elf & Myself was that we wanted 
                        to close the distance by breaking the wall between the VR-player 
                        and the audience. VR is usually quite an isolated experience where 
                        interactions with the outside world and observers is non-existent or 
                        restricted. Instead of merely casting the HMD-users view to a public 
                        screen, we wanted to provide the outside observer with a higher sense 
                        of immersion by allowing them “peep” into the VR-world and control 
                        their point of view through embodied interaction. 
                        The outside spectator’s position was also visualized in the VR-space.
                        <br></br><br></br>Our goal was therefore to create a closer connection 
                        between the audience and the player immersed in VR. Whilst doing this 
                        we wanted to deepen our knowledge in graphics and interactions by 
                        exploring new techniques and novel means of interaction. 
                        We also wanted to work with lights and shadows 
                        to create a more realistic, immersive experience 
                        and to create a cozy atmosphere in line with our Christmas theme. 
                        It was created as a part of the course Advanced Graphics and
                         Interaction in just 4 weeks during the winter of 2022.<br></br><br></br>

                        To read the full story about the project, follow this link <LinkTo href="https://agshu.github.io/elf-and-myself/" target="_blank"><UnderLine>here</UnderLine></LinkTo></ProjectDescriptionReadMore>}
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



export default ElfMyself;