import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";

function LinesRight (props) {     
    return (
        <ContentContainer>
            <LineRightTop></LineRightTop>
            <LineRightMiddle></LineRightMiddle>
            <LineRightBottom></LineRightBottom>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`

`;
const LineRightTop = styled.div`
    right: 5%;
    bottom: 58%;
    height: 80px;
    width: 5px;
    position fixed;
    background-color: #FFFFFF; 
`;

const LineRightMiddle = styled.div`
    right: 5%;
    bottom: 45%;
    height: 80px;
    width: 5px;
    position fixed;
    background-color: #FFFFFF; 
`;

const LineRightBottom = styled.div`
    right: 5%;
    bottom: 32%;
    height: 80px;
    width: 5px;
    position fixed;
    background-color: #FFFFFF; 
`;

export default LinesRight;