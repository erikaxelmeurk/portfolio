import React, {useState} from 'react';
import styled from "styled-components/macro";
import ReactPlayer from "react-player";
import WallPlannerImg from "./images/WallPlannerImg.png";
import {UnderLineCSS, ImgProjectCSS, LinkToCSS, VideoProjectCSS,ImgContainerCSS, ContentContainerCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnorderedListCSS} from './styledComponents';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
function WallPlanner (props) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
    };
    return (
        <ContentContainer>
            <ImgContainer>
                <VideoContainer>
                    <ReactPlayer url="https://vimeo.com/755116600" width="80%" margin="0" controls>
                    </ReactPlayer>
                    {isShown && <ImgProject src={WallPlannerImg} showImg={false}></ImgProject>}
                </VideoContainer>
            </ImgContainer>
            <ProjectInfoContainer>
                <TextContainer>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectTitle>AR Gallery Wall Planner</ProjectTitle>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <ProjectDescription>AR-application created using technologies such as Unity 
                            and AR Foundation that helps the user to plan their room decoration in real time by placing out posters in AR.
                        </ProjectDescription>
                    </AnimationOnScroll>
                        <UnorderedList>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>Unity</li></AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>AR Foundation</li></AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true"><li>AR Core</li></AnimationOnScroll>
                        
                    </UnorderedList>

                    
                    {isShown && <ProjectDescriptionReadMore>
                        The AR application was built in Unity that allowed users to showcase virtual posters in a physical room. 
                        In the study, we compared our application to a photo editing application which is a more simplistic way of using technology for planning 
                        room decoration. A user test with seven participants was conducted, where they evaluated the 
                        two applications in terms of usability, ease of use and user experience.<br></br><br></br>

                        The results indicated that AR does indeed have a good
                         potential to be a viable tool for gallery wall planning. You can find our project report <LinkTo href="./pdf/WallPlanner.pdf" download="WallPlanner.pdf" target="_blank"><UnderLine>here</UnderLine></LinkTo></ProjectDescriptionReadMore>}
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
    @media (max-width: 926px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
    }   
`;

const ImgContainer = styled.div`
    ${ImgContainerCSS}
    @media (max-width: 926px) {
        margin-top: 35px;
        width: 400px;
        height: 320px;
    }   
`;

const UnderLine = styled.span`
    ${UnderLineCSS};
`;

const ImgProject = styled.img`
    ${ImgProjectCSS}
    @media (max-width: 926px) {
        width: 100%;
        display: ${props => props.showImg ? "static;": "none;"};
    }   
`
const VideoContainer = styled.div`
    ${VideoProjectCSS}
    @media (max-width: 926px) {
        width: 100%;
    }   
`;

const ProjectInfoContainer = styled.div`
    ${ProjectInfoContainerCSS}
    @media (max-width: 926px) {
        order: 1;
    }   
`;

const TextContainer = styled.div`
    ${TextContainerCSS};
    margin-top: 40px;
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

const ProjectDescriptionReadMore = styled.p`
    ${ProjectDescriptionCSS}
    margin-bottom: 30px;
`;

const UnorderedList = styled.ul`
    ${UnorderedListCSS}
`;

const LinkTo = styled.a`
    ${LinkToCSS};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.orange};
    display: inline;
`;

export default WallPlanner;