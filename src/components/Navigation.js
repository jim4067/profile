import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

//the global styles for setting the theme
const GlobalTheme = createGlobalStyle`
 body {
     color: ${({ dark }) => dark ? "#eceff4" : "#4c566a"};
     background-color: ${({ dark }) => dark ? "#242933" : "#eceff4"};
 }
`

//animations should be out here
const Fadein = keyframes`
    0%{
        opacity: 0;
        transform: translate(0, -10px);
    }
    100%{
        opacity: 1;
        transfosrm: translate(0);
    }
`


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-top: 8vh; */
    margin: 8vh 0;
    animation: ${Fadein} ease-in .3s;
`

//the logo styled
const Logo = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
`;

//theme changing button
const ThemeSwitcher = styled.button`
    /* background-color: ${({ dark }) => dark ? "white" : "white"}; */
    background: none;
    /* border: 1px solid #48dbfb; */
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
`;

const Navigation = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const theme = window.localStorage.getItem('theme');

        if(theme === 'true'){
            setDark(false);
        } 
        else {
            setDark(true);
        }
      }, []);

    //make sure you useEffect on this so that the theme is not lost when the window is reloaded
    //set the value of dark mode in local storage and useEffect tp set the dark variable
    const handleThemeSwitch = () => {
        //persisting the users theme
        window.localStorage.setItem(
            'theme', dark
        );

        setDark(!dark);
    }


    return (
        <Wrapper>

            <GlobalTheme dark={dark} />

            <Logo>JIM <span style={{ color: '#48dbfb' }} >.</span>  </Logo>

            <ThemeSwitcher onClick={handleThemeSwitch} dark={dark} >{dark ? "sunrise" : "sunset"}</ThemeSwitcher>

        </Wrapper>
    );
}

export default Navigation;

//when switching between dark and light. make the button rounded and ask dark or light

//MAKE SURE you mark the time for transition when doing animations for components fading in and out

//save the them in the local storage and then useEffect hook to see the value stored in local storage to change
//the theme

//add a oh snap to make the whole page fade away like in avengers