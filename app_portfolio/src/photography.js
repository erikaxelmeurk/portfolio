import React from 'react';
import styled from "styled-components/macro";
import { InstagramEmbed } from 'react-social-media-embed';
import {loadingGIF} from './images/loading.gif';

function Photography (props) {
        
    return (
        <ContentContainer>
            <AllImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CZCygUouoG6/" width="500px" height="700px" placeholderImageUrl={loadingGIF}/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CaGsLVAshuX/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CJTY6etFKE7/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CRQxWjTrvVC/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/ChNxn3MDuTS/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CfHeAljrMcf/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CdG1_v6rUph/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CfsmHm1KgQ5/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CcyFsDzMv0u/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CNcUs_kH3Ha/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CLzbPRBlPER/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/B89D2V2ht1-/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CBxss0LFDw2/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CHk3vHLFye4/" width="500px" height="700px" placeholderDisabled/></ImgContainer>
                
            </AllImgContainer>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    display: flex;
    height: 100vh;
`;

const AllImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 100px;
    flex-wrap: wrap;
    justify-content: center;
`;

const ImgContainer = styled.div`
    width: 500px;
    height: 700px;
    display: flex;
    position: relative;
    margin-left: 30px;
    margin-right: 30px;
    align-self: center;
    clip-path: inset(60px 10px 40px 10px);
`;

export default Photography;