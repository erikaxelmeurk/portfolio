import { css } from 'styled-components';


const ContentContainerCSS = css`
    display: flex;
    flex-direction: row;
    margin: 9%;
    margin-bottom: 300px;
`;

const ImgContainerCSS = css`
    width: 100%;
    opacity: ${props => props.opacity};
`;

const ImgProjectCSS = css`
    align-self: center;
    width: 80%;
    margin-bottom: 20px;
`

const VideoProjectCSS = css`
    align-self: center;
    width: 100%;
    height: 100%;
`

const ProjectInfoContainerCSS = css`
    width: 100%;
    display: flex;
    align-self: auto;
    flex-direction: column;
`;

const TextContainerCSS = css`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
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
`;

const SecondaryButtonCSS = css`
  color: white;
  font-size: 1em;
  font-family: Montserrat;
  font-weight: 400;
  background-color: transparent;
  border: 2px solid #E38800;
  border-radius: 150px;
  height: 45px;
  width: 150px;
  cursor: pointer;
  
  opacity: ${props => props.opacity};

  &:hover {
    background-color: solid;
    background-color: #E38800;
    transition: background-color 400ms ease-out 100ms
  }
  &:active {
    transform: translateY(2px);
    opacity: 95%;
    font-size: 0.9em;
    transition: font-size 100ms ease-out;
  }
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

const PrimaryButton = css`
    color: white;
    font-size: 1em;
    font-family: Montserrat;
    font-weight: 400;
    padding: 10px 5px;
    margin: 1em;
    background-color: #E38800;
    background-color: solid;
    border: 2px solid #E38800;
    border-radius: 150px;
    height: 45px;
    width: 170px;
    cursor: pointer;

    &:hover {
        background-color: transparent;
        transition: background-color 400ms ease-out 100ms
      }
      &:active {
        transform: translateY(2px);
        opacity: 95%;
        transition: font-size 100ms ease-out;
      }
  `;

  const LinkToCSS = css`
    display: flex;
    text-decoration: none;
    color: #FFFFFF;
    display:inline;
`;

  
export {ImgContainerCSS, ContentContainerCSS, ImgProjectCSS, ProjectInfoContainerCSS, TextContainerCSS, ProjectTitleCSS, ProjectDescriptionCSS, SecondaryButtonCSS, UnderLineCSS, UnorderedListCSS, VideoProjectCSS, PrimaryButton, LinkToCSS};