import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import useModelProp from "./useModelProp.js";
import {StateModel} from "./index.js";

function LinesRight (props) {     
    const RightLineTopState = useModelProp(StateModel, "firstSection");
    const RightLineMidState = useModelProp(StateModel, "secondSection");
    const RightLineBottomState = useModelProp(StateModel, "thirdSection");
    return (
        <ContentContainer>
            <LineRightTop section ={RightLineTopState}></LineRightTop>
            <LineRightMiddle section ={RightLineMidState}></LineRightMiddle>
            <LineRightBottom section ={RightLineBottomState} ></LineRightBottom>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`

`;
const LineRightTop = styled.div`
    right: 5%;
    bottom: 58%;
    height: 10%;
    width: 5px;
    position fixed;
    background-color: ${props => props.section ? "#E38800" : "#FFFFFF"}; 
`;

const LineRightMiddle = styled.div`
    right: 5%;
    bottom: 45%;
    height: 10%;
    width: 5px;
    position fixed;
    background-color: ${props => props.section ? "#E38800" : "#FFFFFF"}; 
`;

const LineRightBottom = styled.div`
    right: 5%;
    bottom: 32%;
    height: 10%;
    width: 5px;
    position fixed;
    background-color: ${props => props.section ? "#E38800" : "#FFFFFF"}; 
`;

export default LinesRight;