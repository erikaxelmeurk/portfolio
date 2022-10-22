import React, {useState} from 'react';
import styled from "styled-components/macro";
import Dumpling1 from "./images/Dumpling1.png";
import Dumpling2 from "./images/Dumpling2.png";
import {ContentContainerCSS, LinkToCSS, ImgProjectCSS, ImgContainerCSS, UnorderedListCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS} from './styledComponents';
import { AnimationOnScroll } from 'react-animation-on-scroll';
function Dumpling (props) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(current => !current);
    };
    return (
        <ContentContainer>
            <ImgContainer>
                <ImgProject src={Dumpling1}>
                </ImgProject> 
                {isShown && <ImgProject src={Dumpling2}></ImgProject>}
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectTitle>Dumpling</ProjectTitle>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectDescription>
                                Dumpling is a semi-interactive mobile application prototype 
                                for a dumpster-diver community that aims to save wasted food all over Stockholm. 
                                It was designed by using methods such as Value Proposition, User Interviews, 
                                Story Mapping, Usability Testing, SWOT Analysis and Six Thinking Hats.
                            </ProjectDescription>
                    </AnimationOnScroll>
                    <UnorderedList>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Figma</li></AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Usability Testing</li></AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Six Thinking Hats</li></AnimationOnScroll>
                    </UnorderedList>
                    {isShown && <ProjectDescriptionReadMore> 
                        This project examined dumpster divers as an user group and the goal was to build an interactive prototype from the groups needs.
                        Our design process was based on the double diamond methodology where we used different design methods and iteration to come up with our
                        final design proposal. <br></br><br></br>

                        In our final design, based on our users needs we identified earlier in the process, a map was created that showed different locations
                        of dumpsters. In these Dumpsters, users could in real time see what was inside, based on other users input that was already there.<br></br><br></br>

                        You can find our project report <LinkTo href="./pdf/Dumpling.pdf" download="Dumpling.pdf" target="_blank">here</LinkTo></ProjectDescriptionReadMore>}
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
    ${ImgContainerCSS};
`;

const ImgProject = styled.img`
    ${ImgProjectCSS}
    width: 100%;
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

export default Dumpling;