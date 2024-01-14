import React, {useState} from 'react';
import styled from "styled-components/macro";
import UniQuizImg from "./images/UniQuiz.png";
import UniQuizImg1 from "./images/UniQuiz1.png";
import {UnderLineCSS, LinkToCSS, ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnorderedListCSS} from './styledComponents';
import { AnimationOnScroll } from 'react-animation-on-scroll';
function UniQuiz (props) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(current => !current);
    };
    
    return (
        <ContentContainer>
            <ImgContainer>
                <ImgProject src={UniQuizImg} showImg={true}>
                </ImgProject> 
                {isShown && <ImgProject src={UniQuizImg1} showImg={false}></ImgProject>}
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectTitle>UniQuiz</ProjectTitle>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectDescription>
                            A multiplayer music quiz awarded with an UX-prize that lets you challenge 
                            your friends on a quiz with music that you have all heard before. By analyzing each player's Spotify using the Spotify API, 
                            UniQuiz generates unique playlists by combining songs that the players have in common. 
                            We call it the music quiz that’s always fun for everyone!
                        </ProjectDescription>
                    </AnimationOnScroll>
                    <UnorderedList>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>React</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Firebase</li></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Spotify API</li></AnimationOnScroll>
                    </UnorderedList>
                    {isShown && <ProjectDescriptionReadMore> 
                        
                    The project was developed using a tech stack comprising React, JS/JSX, HTML5, and CSS. 
                    To facilitate user management and enable real-time data tracking for multiplayer functionality, 
                    Firebase was incorporated as both an account management system and a robust real-time database.
                    The core functionality of the application revolves around creating and participating in quizzes. 
                    The process begins with a host creating a quiz, inviting other users to join in. 
                    The host has the authority to determine the number of tracks to be played and the duration of each track. 
                    Leveraging the power of Spotify playlists, the application intelligently selects random songs that are common 
                    among all players in the quiz. <br></br><br></br>
                    Finally, like any other music quiz, the player with the highest score wins! You can find our git repository <LinkTo href="https://drive.google.com/file/d/1qVaa1uig67O4PzsRutQOxvNM8MmIwc9n/view?usp=sharing" target="_blank"><UnderLine>here</UnderLine></LinkTo></ProjectDescriptionReadMore>}
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

const UnderLine = styled.span`
    ${UnderLineCSS};
`;

const ContentContainer = styled.div`
    ${ContentContainerCSS}
    margin-top: 400px;
    @media (max-width: 926px) {
        display: flex;
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

export default UniQuiz;