import React from 'react';
import styled, {keyframes} from "styled-components";
import useModelProp from "./useModelProp.js";
import {StateModel} from "./index.js";
import { fadeInRightBig } from 'react-animations';

const bounceAnimation = keyframes`${fadeInRightBig}`;

function LinesRight (props) {     
    const RightLine1State = useModelProp(StateModel, "firstSection");
    const RightLine2State = useModelProp(StateModel, "secondSection");
    const RightLine3State = useModelProp(StateModel, "thirdSection");
    const RightLine4State = useModelProp(StateModel, "forthSection");
    return (
        <ContentContainer>
            <LineRight1 section ={RightLine1State}></LineRight1>
            <LineRight2 section ={RightLine2State}></LineRight2>
            <LineRight3 section ={RightLine3State} ></LineRight3>
            <LineRight4 section ={RightLine4State} ></LineRight4>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`

`
const LineRight1 = styled.div`
    animation: 1s ${bounceAnimation};
    right: 5%;
    bottom: 67%;
    height: 9%;
    width: 5px;
    position fixed;
    background-color: ${props => props.section ? "#E38800" : "#FFFFFF"}; 
`;

const LineRight2 = styled.div`
    animation: 1.2s ${bounceAnimation};
    right: 5%;
    bottom: 55%;
    height: 9%;
    width: 5px;
    position fixed;
    background-color: ${props => props.section ? "#E38800" : "#FFFFFF"}; 
`;


const LineRight3 = styled.div`
    animation: 1.5s ${bounceAnimation};
    right: 5%;
    bottom: 43%;
    height: 9%;
    width: 5px;
    position fixed;
    background-color: ${props => props.section ? "#E38800" : "#FFFFFF"}; 
`;

const LineRight4 = styled.div`
    animation: 1.7s ${bounceAnimation};
    right: 5%;
    bottom: 31%;
    height: 9%;
    width: 5px;
    position fixed;
    background-color: ${props => props.section ? "#E38800" : "#FFFFFF"}; 
`;

export default LinesRight;