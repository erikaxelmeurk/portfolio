import React from 'react';
import styled from "styled-components/macro";
import { InstagramEmbed } from 'react-social-media-embed';

function Photography (props) {
        
    return (
        <ContentContainer>
            <AllImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CZCygUouoG6/" width="100%" height="100%"/></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CaGsLVAshuX/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CJTY6etFKE7/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CRQxWjTrvVC/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/ChNxn3MDuTS/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CfHeAljrMcf/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CdG1_v6rUph/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CfsmHm1KgQ5/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CcyFsDzMv0u/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CNcUs_kH3Ha/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CLzbPRBlPER/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/B89D2V2ht1-/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CBxss0LFDw2/" width="100%" height="100%" /></ImgContainer>
                <ImgContainer><InstagramEmbed url="https://www.instagram.com/p/CHk3vHLFye4/" width="100%" height="100%" /></ImgContainer>
                
            </AllImgContainer>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    display: flex;
    height: 100%;
    overflow:hidden;
`;

const AllImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 100px;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 926px) {
        margin: 0;
        margin-top: 50px;
    }
`;

const ImgContainer = styled.div`
    display: flex;
    position: relative;
    align-self: center;
    clip-path: inset(10% 5% 30% 5%);
`;

export default Photography;