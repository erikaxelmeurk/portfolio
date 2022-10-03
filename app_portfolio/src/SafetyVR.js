import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import SafetyVRImg from "./images/SafetyVRImg.png";
import {ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnderLineCSS, UnorderedListCSS} from './styledComponents';

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
                        <ProjectDescription>Research project where we tested women’s perceived safety of the environment in a VR application using a within-subject experiment. The goal was to investigate whether VR can be a useful tool to evaluate women's safety when city planning.</ProjectDescription>
                    <UnorderedList>
                    <li>Unity</li>
                    <li>HTC Vive Pro</li>
                    <li>Within Subject Design</li>
                    </UnorderedList>
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
    ${SecondaryButtonCSS}
`;

const UnderLine = styled.span`
    ${UnderLineCSS}
`;

const UnorderedList = styled.ul`
    ${UnorderedListCSS}
`;


export default SafetyVR;