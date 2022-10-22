import React, { useState, useEffect } from "react";
import styled from "styled-components/macro"
import instagramIcon from "./images/ig.png";
import linkedinIcon from "./images/LinkedinIcon.png";
import { Link, useLocation } from "react-router-dom";

function Navbar (props) {
    const [underlinePortfolio, setUnderlinePortfolio] = useState(false);
    const [underlinePhotography, setUnderlinePhotography] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (window.location.href == "http://localhost:3000/") {
            console.log("kom in i portfölj ")
            setUnderlinePortfolio(true);
            setUnderlinePhotography(false);
        } else {
            setUnderlinePortfolio(false);
            console.log("kom in i photo ")
            setUnderlinePhotography(true);
        }

    });

    
    useEffect(() => {
        //to refresh site so underline changes
    }, [location]);

    return (
        <NavbarLinkContainer>
            <NavbarDivLeft></NavbarDivLeft>
            <NavbarDivMiddle>
                <NavLink to ="/" underline={underlinePortfolio}>portfolio</NavLink>
                <NavLink to="/photography" underline={underlinePhotography}>photography</NavLink>
            </NavbarDivMiddle>
            <NavbarDivRight>
                <Socials>
                    <InstagramIconContainer>
                        <a href="https://www.instagram.com/erikaxelmedia/" target="_blank" rel="noreferrer noopener"><img src = {instagramIcon} width="100%" alt="Instagram Icon"></img></a>
                    </InstagramIconContainer>
                    <LinkedInIconContainer>
                    <a href="https://www.linkedin.com/in/erikmeurk/" target="_blank" rel="noreferrer noopener"><img src = {linkedinIcon} width="100%" alt="LinkedIn Icon" ></img></a>
                    </LinkedInIconContainer>
                </Socials>
            </NavbarDivRight>
        </NavbarLinkContainer>
    )
}

const NavLink = styled(Link)`
    color: #ECECEC;
    font-family: Montserrat;
    font-weight: 550;
    font-size: 14px;
    margin-right: 5%; 
    margin-left: 5%;
    letter-spacing: 2px;
    text-decoration: ${props => props.underline ? "underline": ""}!important;
    text-decoration-color: #E38800!important;
    text-decoration-thickness: 2px!important;
    text-underline-offset: 5px!important;
    a:link {
    }
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
    display: flex;
`;

const InstagramIconContainer = styled.div`
    width: 22px;
    margin-left: auto;
    margin-right: 20px;
`;

const LinkedInIconContainer = styled.div`
    width: 22px;
    margin-right: 70px;
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