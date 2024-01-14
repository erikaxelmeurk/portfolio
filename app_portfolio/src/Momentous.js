import React, {useState} from 'react';
import styled from "styled-components/macro";
import MomentousImg1 from "./images/Momentous1.png";
import MomentousImg2 from "./images/Momentous2.png";
import {UnderLineCSS, LinkToCSS, ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnorderedListCSS} from './styledComponents';
import { AnimationOnScroll } from 'react-animation-on-scroll';
function Momentous (props) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(current => !current);
    };
    
    return (
        <ContentContainer>
            <ImgContainer>
                <ImgProject src={MomentousImg1} showImg={true}>
                </ImgProject> 
                {isShown && <ImgProject src={MomentousImg2} showImg={false}></ImgProject>}
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectTitle>Momentous: Shared online photo albums</ProjectTitle>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectDescription>
                        A web application where users can create online photo albums,
                          upload photos and invite their friends to contribute to the albums. Built using React and a Node.js server.
                        </ProjectDescription>
                    </AnimationOnScroll>
                    <UnorderedList>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>React</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Typescript</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Node.js</li></AnimationOnScroll>
                    </UnorderedList>
                    {isShown && <ProjectDescriptionReadMore> 
                        In the course DH2643 Advanced Interaction Programming, I was on a project centered around 
                        developing client-server web applications. Our primary objective was to create a user-friendly online 
                        photo album platform that enabled seamless photo uploads and collaboration among friends.
                        To accomplish this, we leveraged a tech stack consisting of React, Typescript, Node.js, 
                        Express.js, Websockets, and Google Firebase Database and Storage. These technologies played a 
                        crucial role in ensuring the smooth functioning of our application while maintaining scalability and reliability.
                        <br></br><br></br>
                        Within the team, my primary responsibility revolved around the backend development. 
                        I took charge of designing and implementing the server-side architecture, crafting the APIs, 
                        and integrating the necessary functionalities. A link to the git repository can be found <LinkTo href="https://github.com/mikaela-garde/Project-DH2643" target="_blank"><UnderLine>here</UnderLine></LinkTo></ProjectDescriptionReadMore>}
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
        flex-direction: column;
        margin-bottom: 50px;
    }   
`;

const UnderLine = styled.span`
    ${UnderLineCSS};
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

export default Momentous;