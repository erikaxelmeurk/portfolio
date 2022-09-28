import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import WallPlannerImg from "./images/WallPlanner.png";
import {ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, ReadMoreCSS, UnderLineCSS} from './styledComponents';

function WallPlanner (props) {
    return (
        <ContentContainer>
            <ImgContainer>
                <ImgProject src={WallPlannerImg}></ImgProject> 
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                        <ProjectTitle>AR Gallery Wall Planner</ProjectTitle>
                        <ProjectDescription>AR-application created using technologies such as <UnderLine>Unity</UnderLine>, <UnderLine>AR Foundation</UnderLine> and <UnderLine>AR Core</UnderLine> that helps the user to plan their room decoration in real time by placing out posters in AR.</ProjectDescription>
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
    ${ReadMoreCSS}
`;

const UnderLine = styled.span`
    ${UnderLineCSS}
`;


export default WallPlanner;