import React from 'react';
import styled, { keyframes } from 'styled-components';
// import SectionFadeIn from '../styles/SectionFadeIn';

//the styles for this components
//animations should be up here
const FadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
        transform: none;
    }
`;

const Wrapper = styled.nav`
    animation: ${FadeIn} ease-in-out 2s;
    position: fixed;
    padding: 30px 20px;
    /* transition: .3s ease-in ease-out; */
    top: 0;
    z-index: 999;
    width: 100%;
`;

//the logo styled
const Logo = styled.h2`
font-family: Arial, Helvetica, sans-serif;
font-size: normal;
`;

const ThemeSwitcher = styled.button`
    background: none;
    border: none;
    transition: .4s linear; 

    :hover{
        cursor: pointer;
    }

`;

const InnerWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ThemeStyle = styled.h2`
    font-size: 27px;
    transition: .4s linear;

    :hover{
        text-decoration: underline;
    }
`;

const Nav = ({ switchTheme, theme }) => {

    return (
        <Wrapper >

            <InnerWrap>

                <Logo>JIM <span style={{ color: '#48dbfb' }} >.</span>  </Logo>

                <ThemeSwitcher onClick={switchTheme} ><ThemeStyle > sun{theme === "light" ? "set" : "rise"} </ThemeStyle> </ThemeSwitcher>

            </InnerWrap>

        </Wrapper >
    )
}

export default Nav;