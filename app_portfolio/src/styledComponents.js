import styled, { css } from 'styled-components';


const ImgContainerCSS = css`
    width: 100%;
    flex-direction: column;
    opacity: ${props => props.opacity};
    align-self: center;
`;

const ContentContainerCSS = css`
    display: flex;
    flex-direction: row;
    height: 400px;
    margin: 8%;
`;

const ImgProjectCSS = css`
    align-self: center;
    width: 550px;
    height: 300px;
    object-fit: cover;
`

const ProjectInfoContainerCSS = css`
    width: 100%;
    display: flex;
    align-self: center;
    flex-direction: column;
`;

const TextContainerCSS = css`
    display: flex;
    flex-direction: column;
    align-self: center;
`;

const ProjectTitleCSS = css`
    letter-spacing: 7px;    
    font-family: Lato;      
    font-weight: 500;
    font-size: 50px;
    color: white;
    opacity: ${props => props.opacity};
    margin-bottom: 20px;
`;

const ProjectDescriptionCSS = css`
    color: #FFFFFF;
    letter-spacing: 1px;
    font-family: Montserrat;
    line-height: 25px;
    font-weight: 400;
    font-size: 15px;
    color: white;
    opacity: ${props => props.opacity};
`;

const ReadMoreCSS = css`
  color: white;
  font-size: 1em;
  font-family: Montserrat;
  font-weight: 400;
  padding: 10px 5px;
  margin: 1em;
  background-color: transparent;
  border: 2px solid #E38800;
  border-radius: 150px;
  height: 50px;
  width: 200px;
  opacity: ${props => props.opacity};
`;

const UnderLineCSS = css`
    text-decoration: underline #E38800;
    text-decoration-thickness: 2px;
`; 

export {ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, ReadMoreCSS, UnderLineCSS };