import styled, { css } from 'styled-components';


const ContentContainerCSS = css`
    display: flex;
    flex-direction: row;
    height: 400px;
    margin: 9%;
`;

const ImgContainerCSS = css`
    width: 100%;
    opacity: ${props => props.opacity};
    align-self: center;
`;

const ImgProjectCSS = css`
    align-self: center;
    width: 80%;
    height: 100%;
    object-fit: cover;
`

const VideoProjectCSS = css`
    align-self: center;
    width: 80%;
    height: 100%;
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
    letter-spacing: 1px;    
    font-family: Lato;      
    font-weight: 500;
    font-size: 2em;
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
    font-size: 0.9em;
    color: white;
    opacity: ${props => props.opacity};
`;

const ReadMoreCSS = css`
  color: white;
  font-size: 1em;
  font-family: Montserrat;
  font-weight: 400;
  padding: 10px 5px;
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


const UnorderedListCSS = css`
    color: #FFFFFF;
    letter-spacing: 1px;
    font-family: Montserrat;
    line-height: 25px;
    font-weight: 400;
    font-size: 15px;
    color: white;
    margin: 30px;
    list-style: none;
    li::before {
        content: "✔"; 
        color: #E38800;
        font-size: 15px;
        margin: 15px;
    }
    li {
        margin-bottom: 7px;
    }
    color: white;
    `

export {ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, ReadMoreCSS, UnderLineCSS, UnorderedListCSS, VideoProjectCSS};