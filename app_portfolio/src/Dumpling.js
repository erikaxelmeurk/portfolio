import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import Dumpling1 from "./images/Dumpling1.png";
import Dumpling2 from "./images/Dumpling2.png";
import {ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, ReadMoreCSS, UnderLineCSS} from './styledComponents';

function Dumpling (props) {
    return (
        <ContentContainer>
            <ImgContainer>
                <ImgProject src={Dumpling1}>
                </ImgProject> 
                <ImgProject src={Dumpling2}>
                </ImgProject> 
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                        <ProjectTitle>Dumpling</ProjectTitle>
                        <ProjectDescription>Dumpling is a semi-interactive mobile application prototype for a dumpster-diver community that aims to save wasted food all over Stockholm. It was designed by using methods such as <UnderLine>Value Proposition</UnderLine>, <UnderLine>User Interviews</UnderLine>, <UnderLine>Story Mapping</UnderLine>, <UnderLine>Usability Testing</UnderLine>, <UnderLine>SWOT Analysis</UnderLine> and <UnderLine>Six Thinking Hats</UnderLine>.</ProjectDescription>
                    <ReadMore>read more</ReadMore>
                </TextContainer>
            </ProjectInfoContainer>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 400px;
    margin: 8%;
`;

const ImgContainer = styled.div`
    width: 100%;
    flex-direction: row;
    opacity: ${props => props.opacity};
    align-self: center;
`;

const ImgProject = styled.img`
    align-self: center;
    width: 200px;
    height: 400px;
    margin: 30px;
    object-fit: cover;
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

export default Dumpling;