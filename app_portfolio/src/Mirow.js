import React, {useState} from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";
import MirowImg from "./images/MirowImg.png";
import {LinkToCSS, ImgProjectCSS, VideoProjectCSS, ImgContainerCSS, ContentContainerCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnorderedListCSS} from './styledComponents';
import { AnimationOnScroll } from 'react-animation-on-scroll';
function Mirow (props) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
    };
    return (
        <ContentContainer>
            <ImgContainer>
                <VideoContainer>
                    <ReactPlayer url="https://vimeo.com/755109458" width='80%'></ReactPlayer>
                    {isShown && <ImgProject src={MirowImg}></ImgProject>}
                </VideoContainer>
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectTitle>Mirow</ProjectTitle>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectDescription>Mirow is a concept of a smart mirror that creates 
                            sponteanous opportunities for interaction between friends. 
                            This concept was based on a design brief that proposed that introversion 
                            is the new normal in the future, and people might need support in this environment.
                        </ProjectDescription>
                    </AnimationOnScroll>

                    <UnorderedList>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Double Diamond Process</li></AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Affinity Diagramming</li></AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Empathy Mapping</li></AnimationOnScroll>
                </UnorderedList>
                {isShown && <ProjectDescriptionReadMore>
                    The design brief was an invitation to think of new technologies that could 
                    support extroverts to navigate in a world where introversion is the new normal.
                    Firstly, we identified the key user problems using Affinity Diagramming with quotes from user interviews we conducted.
                    Afterwards, a persona was created along an Empathy Map to get a deeper understanding of our user group.
                    We then brainstormed ideas, prototyped Lo-Fi in Figma and did a Hi-Fi user test of our design.
                    <br></br><br></br>

                    The final deliverable was a video showcasing our design proposal and how it could look like if it was real.
                    You can follow our workbook <LinkTo href="./pdf/Mirow.pdf" download="Mirow.pdf" target="_blank">here</LinkTo></ProjectDescriptionReadMore>}
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
`;

const ImgContainer = styled.div`
    ${ImgContainerCSS}
`;

const ImgProject = styled.img`
    ${ImgProjectCSS}
`
const VideoContainer = styled.div`
    ${VideoProjectCSS}
`;

const ProjectInfoContainer = styled.div`
    ${ProjectInfoContainerCSS}
`;

const TextContainer = styled.div`
    ${TextContainerCSS}
`;

const ProjectTitle = styled.h1`
    ${ProjectTitleCSS}
`;

const ProjectDescription = styled.h2`
    ${ProjectDescriptionCSS}
`;

const ReadMore = styled.button`
    ${SecondaryButtonCSS}
`;

const UnorderedList = styled.ul`
    ${UnorderedListCSS}
`;

const ProjectDescriptionReadMore = styled.p`
    ${ProjectDescriptionCSS}
    margin-bottom: 30px;
`;

const LinkTo = styled.a`
    ${LinkToCSS};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.orange};
    display: inline;
`;

export default Mirow;