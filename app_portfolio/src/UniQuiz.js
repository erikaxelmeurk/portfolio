import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import UniQuizImg from "./images/UniQuiz.png";
import {ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, ReadMoreCSS, UnderLineCSS} from './styledComponents';

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
                        <ProjectDescription>An interactive online multiplayer music quiz developed in <UnderLine>React</UnderLine> that generates unique playlists by combining songs that the players have in common using the <UnderLine>Spotify API</UnderLine>. We call it the music quiz that’s always fun!</ProjectDescription>
                    <ReadMore>read more</ReadMore>
                </TextContainer>
            </ProjectInfoContainer>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    ${ContentContainerCSS}
    margin-top: 400px;
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
    ${ReadMoreCSS}
`;

const UnderLine = styled.span`
    ${UnderLineCSS}
`;

export default UniQuiz;