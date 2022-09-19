import React from "react";
import styled from "styled-components";
import instagramIcon from "./images/ig.png";
import linkedinIcon from "./images/linkedin.png";

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
                        <img src = {instagramIcon}width="100%"></img>
                    </InstagramIconContainer>
                    <LinkedInIconContainer>
                        <img src = {linkedinIcon} width="100%"></img>
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
    margin-right: 2%; 
    margin-left: 2%;
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
`;

const InstagramIconContainer = styled.div`
    width: 4%;
    margin-left: auto; 
    margin-right: 2%;

`;

const LinkedInIconContainer = styled.div`
    width: 4%;
    margin-right: 2%;
`;

const NavbarLinkContainer = styled.div`
    width: 100%;
    display: inline-flex;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    margin-top: 10px;
`;

export default Navbar;