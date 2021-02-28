import React from 'react';
import styled from 'styled-components';
import projects from '../assets/projects-list';

const Wrapper = styled.div`
    margin-top: 3vh;
`;

const Heading = styled.h2`
    margin: 3vh 0;
`;

const ProjectContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

const LinkWrap = styled.a`
    color: ${({ dark }) => dark ? "#eceff4" : "#4c566a"};
    text-decoration: none;
    transition: .2s linear;

    :hover{
        cursor: pointer;
        transform: scale(1.08);
    }
`;

const SingleProject = styled.div`
    /* background-color: ${({ dark }) => dark ? "#353848" : "#eceff4"}; */
    border: ${({ dark }) => dark ? "1px solid #48dbfb" : "none"};
    border-radius: 4px;
    box-shadow: ${({ dark }) => dark ? "0px 5px 5px -5px darkslategrey" : "0px 7px 15px -5px  #00000070"};
    margin: 1.5vh 30px 1.5vh 0vw;
    outline: none;
    padding: 4px 20px;
    width: 42.7vw;

    @media (max-width: 1200px) {
        width: 85vw;
        margin-right: 30px;
    }
`;

const ProjectName = styled.h4`
    text-decoration: solid underline #48dbfb ;
    line-height: 1;
`;

const TechStack = styled.p`
    line-height: 2;
`;

const ProjectDescription = styled.p`
    opacity: .9;
`;

const Projects = ({ dark }) => {

    return (
        <Wrapper>

            <hr style={{ "margin-right": "30px" }} /> {/* A line separator*/}
            <Heading>Projects Show & Tell</Heading>

            <ProjectContainer>
                {
                    projects.map((proj) =>
                        <LinkWrap dark={dark} href={proj.github_link}>
                            <SingleProject dark={dark} >
                                <ProjectName>{proj.name}</ProjectName>
                                <TechStack>{proj.tech_stack}</TechStack>
                                <ProjectDescription>{proj.description}</ProjectDescription>
                            </SingleProject>
                        </LinkWrap>
                    )
                }
            </ProjectContainer>
        </Wrapper>
    );
}

export default Projects;