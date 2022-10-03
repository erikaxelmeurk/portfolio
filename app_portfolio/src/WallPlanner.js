import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";
import WallPlannerImg from "./images/WallPlanner.png";
import {VideoProjectCSS,ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnderLineCSS, UnorderedListCSS} from './styledComponents';

function WallPlanner (props) {
    return (
        <ContentContainer>
            <ImgContainer>
                <VideoContainer>
                    <ReactPlayer url="https://vimeo.com/755116600" width="100%">
                    </ReactPlayer>
                </VideoContainer>
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                        <ProjectTitle>AR Gallery Wall Planner</ProjectTitle>
                        <ProjectDescription>AR-application created using technologies such as Unity and AR Foundation that helps the user to plan their room decoration in real time by placing out posters in AR.</ProjectDescription>
                        <UnorderedList>
                        <li>Unity</li>
                        <li>AR Foundation</li>
                        <li>AR Core</li>
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
    ${SecondaryButtonCSS}
`;

const UnderLine = styled.span`
    ${UnderLineCSS}
`;

const UnorderedList = styled.ul`
    ${UnorderedListCSS}
`;


export default WallPlanner;