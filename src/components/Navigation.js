import React from 'react';
import styled, { keyframes } from 'styled-components';

//animations should be out here
const Fadein = keyframes`
    0%{
        opacity: 0;
        transform: translate(0, -10px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8vh 0;
    animation: ${Fadein} ease-in-out .5s;
`

//the logo styled
const Logo = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: normal;

    @media(max-width: 2500px){
        font-size: normal;
    }

    @media(min-width: 1200px){
        font-size: 3vw;
    }
`;

//theme changing button
const ThemeSwitcher = styled.button`
    background: none;
    border: ${({ dark }) => dark ? "1px solid #48dbfb" : "none"};
    border-radius: 4px;
    box-shadow: ${({ dark }) => dark ? "0px 5px 5px -5px darkslategrey" : "0px 7px 15px -5px  #00000070"};
    color: ${({ dark }) => dark ? "white" : "black"};
    height: 2.2em;
    margin-right: 4vw;
    outline: none;
    padding: 0.25em 2em;
    transition: .4s linear;

    :hover{
        background-color: #48dbfb;
        cursor: pointer;
        color: black;
    }

    @media (min-width: 1400px){
        font-size: 2vh;
        font-weight: 100;
        height: 5vh;
        text-align: center;
    }
`;

const Navigation = ({ dark, handleThemeSwitch }) => {

    return (
        <Wrapper>

            <Logo>JIM <span style={{ color: '#48dbfb' }} >.</span>  </Logo>

            <ThemeSwitcher onClick={handleThemeSwitch} dark={dark} >{dark ? "sunrise" : "sunset"}</ThemeSwitcher>

        </Wrapper>
    );
}

export default Navigation;