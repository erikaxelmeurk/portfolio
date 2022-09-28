import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import SafetyVRImg from "./images/SafetyVRImg.png";
import {ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, ReadMoreCSS, UnderLineCSS} from './styledComponents';

function SafetyVR (props) {
    return (
        <ContentContainer>
            <ImgContainer>
                <ImgProject src={SafetyVRImg}>
                </ImgProject> 
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                        <ProjectTitle>Women's Perceived Safety in VR</ProjectTitle>
                        <ProjectDescription>Research project where we tested women’s perceived safety of walls without windows in a VR application using a <UnderLine>within-subject</UnderLine> experiment. The project was developed in <UnderLine>Unity</UnderLine> using a <UnderLine>HTC Vive</UnderLine>.</ProjectDescription>
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

export default SafetyVR;