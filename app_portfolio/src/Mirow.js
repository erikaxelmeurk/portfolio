import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import MirowImg from "./images/MirowImg.png";
import ReactPlayer from "react-player";
import {VideoProjectCSS, ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, ReadMoreCSS, UnderLineCSS, UnorderedListCSS} from './styledComponents';

function Mirow (props) {
    return (
        <ContentContainer>
            <ImgContainer>
                <VideoContainer>
                    <ReactPlayer url="https://vimeo.com/755109458" width='100%'></ReactPlayer>
                </VideoContainer>
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                        <ProjectTitle>Mirow</ProjectTitle>
                        <ProjectDescription>Mirow is a concept of a smart mirror that creates sponteanous opportunities for interaction between friends. This concept was based on a design brief that proposed that introversion is the new normal in the future, and people might need support in this environment.</ProjectDescription>
                    <UnorderedList>
                        <li>Double Diamond Process</li>
                        <li>Affinity Diagramming</li>
                        <li>Empathy Mapping</li>
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

const VideoContainer = styled.div`
    ${VideoProjectCSS}
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

const UnorderedList = styled.ul`
    ${UnorderedListCSS}
`;

export default Mirow;