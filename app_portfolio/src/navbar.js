import React from "react";
import styled from "styled-components";
import instagramIcon from "./images/ig.png";
import linkedinIcon from "./images/LinkedinIcon.png";

function Navbar (props) {
    return (
        <NavbarLinkContainer>
            <NavbarDivLeft></NavbarDivLeft>
            <NavbarDivMiddle>
                <NavLink>portfolio</NavLink>
                <NavLink>photography</NavLink>
            </NavbarDivMiddle>
            <NavbarDivRight>
                <Socials>
                    <InstagramIconContainer>
                        <a href="https://www.instagram.com/erikaxelmedia/" target="_blank"><img src = {instagramIcon}width="100%"></img></a>
                    </InstagramIconContainer>
                    <LinkedInIconContainer>
                    <a href="https://www.linkedin.com/in/erikmeurk/" target="_blank"><img src = {linkedinIcon} width="100%"></img></a>
                    </LinkedInIconContainer>
                </Socials>
            </NavbarDivRight>
        </NavbarLinkContainer>
    )
}

const NavLink = styled.a`
    color: #ECECEC;
    font-family: Montserrat;
    font-weight: 550;
    font-size: 14px;
    margin-right: 5%; 
    margin-left: 5%;
    letter-spacing: 2px;
`;

const NavbarDivLeft = styled.div`
    width: 100%;
    color: #ECECEC;
    font-family: Montserrat;
    font-weight: 550;
    font-size: 14px;
`;
const NavbarDivMiddle = styled.div`
    text-align: center;
    width: 100%;
    color: #ECECEC;
    font-family: Montserrat;
    font-weight: 550;
    font-size: 14px;
`;

const NavbarDivRight = styled.div`
    width: 100%;
    color: #ECECEC;
    font-family: Montserrat;
    font-weight: 550;
    font-size: 14px;
`;

const Socials = styled.div`
    display: inline-flex;
    margin-right: 8%;
`;

const InstagramIconContainer = styled.div`
    width: 5%;
    margin-left: auto; 
    margin-right: 2%;


`;

const LinkedInIconContainer = styled.div`
    width: 5%;
    margin-right: 2%;
`;

const NavbarLinkContainer = styled.div`
    width: 100%;
    display: inline-flex;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    margin-top: 2%;
`;

export default Navbar;