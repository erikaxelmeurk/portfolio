import React, {useState} from 'react';
import styled from "styled-components/macro";
import UniQuizImg from "./images/UniQuiz.png";
import UniQuizImg1 from "./images/UniQuiz1.png";
import {LinkToCSS, ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnorderedListCSS} from './styledComponents';
import { AnimationOnScroll } from 'react-animation-on-scroll';
function UniQuiz (props) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(current => !current);
    };
    
    return (
        <ContentContainer>
            <ImgContainer>
                <ImgProject src={UniQuizImg}>
                </ImgProject> 
                {isShown && <ImgProject src={UniQuizImg1}></ImgProject>}
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
                        This project was created in React using JS/JSX, HTML5 and CSS. Firebase was used to handle accounts and as a real-time database to 
                        keep track of all the data needed to make multiplayer possible. It works by a host creating a quiz, which then other users joined.
                        The host then selects how many tracks should be played as well as how long each track should be played. 
                        By analyzing Spotify playlists the application then picks out random songs that all players in the quiz have in common. <br></br><br></br>

                        Finally, like any other music quiz, the player with the highest score wins! You can find our git repository <LinkTo href="https://drive.google.com/file/d/1qVaa1uig67O4PzsRutQOxvNM8MmIwc9n/view?usp=sharing" target="_blank">here</LinkTo></ProjectDescriptionReadMore>}
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

export default UniQuiz;