import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import UniQuizImg from "./images/UniQuiz.png";
import {ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnderLineCSS, UnorderedListCSS} from './styledComponents';

function UniQuiz (props) {
    return (
        <ContentContainer>
            <ImgContainer>
                <ImgProject src={UniQuizImg}>
                </ImgProject> 
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                    <ProjectTitle>UniQuiz</ProjectTitle>
                    <ProjectDescription>An interactive online multiplayer music quiz developed in React that generates unique playlists by combining songs that the players have in common using the Spotify API. We call it the music quiz that’s always fun for everyone!</ProjectDescription>
                    <UnorderedList>
                        <li>React</li>
                        <li>Firebase</li>
                        <li>Spotify API</li>
                    </UnorderedList>
                    <ReadMore>read more</ReadMore>
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

const UnderLine = styled.span`
    ${UnderLineCSS}
`;

const UnorderedList = styled.ul`
    ${UnorderedListCSS}
`;

export default UniQuiz;