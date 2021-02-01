import React from 'react';
import styled, { keyframes } from 'styled-components';
import resume from '../assets/resume.pdf';

const SlideIn = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: .5;
    }
    100%{
        opacity: 1;
    }
`;

const Wrapper = styled.div`
   animation: ${SlideIn} ease-in 1s;
`;

const Greetings = styled.section`
	font-family: Alata;
	font-size: 6vw;
	font-weight: lighter;
	line-height: 8vw;

	@media (max-width: 680px) {
		line-height: 15vw;
	}
`;

const ButtonContainer = styled.section`
    margin: 12vh 0px;

    @media (max-width: 680px) {
        margin: 6vh 0vh;
    }
`;

const Button = styled.button`
    background-color: ${({ dark }) => dark ? "#242933" : "#eceff4"};
    border: ${({ dark }) => dark ? "1px solid #48dbfb" : "none"};
    border-radius: 6px;
    box-shadow: ${({ dark }) => dark ? "0px 5px 5px -5px darkslategrey" : "0px 7px 15px -5px  #00000070"};
    color: ${({ dark }) => dark ? "#eceff4" : "#4c566a"};
    font-size: 2vh;
    height: 6.5vh;
    outline: none;
	text-align: center;
	text-decoration: none;
	transition: 0.2s ease-in;
    width: 15vw;

    :hover {
        background-color: #48dbfb;
        color: black;
        cursor: pointer;
    }
    
    @media (max-width: 680px){
        height: 5vh;
        width: 100px;
    }
`;

const ResumeButton = styled(Button)`
//apparently these two backtick should not be forgotten unless you want to break everything
`;

const EmailButton = styled(Button)`
    margin-left: 20vw;
`;

const Landing = ({ dark }) => {

    return (
        <Wrapper >

            <Greetings>
                Hi there, I'm Jimmy. <br />
                An online self-taught <br />
                <span style={{ color: "#48dbfb" }}>Full stack</span> web developer
            </Greetings>

            <ButtonContainer >
                <ResumeButton dark={dark} > <a style={{ textDecoration: "none", color: "inherit" }} href={resume} target="__blank" >resume </a> </ResumeButton>
                <EmailButton dark={dark} > <a style={{ textDecoration: "none", color: "inherit" }} href="mailto: jimmyimpulse@outlook.com" >email </a> </EmailButton>
            </ButtonContainer >

        </Wrapper>
    );
}

export default Landing;