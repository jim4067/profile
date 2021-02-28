import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	margin-top: 3vh;

	@media (min-width: 1500px){
        font-size: 2vh;
    }
`;

const Heading = styled.h2`
	margin: 3vh 0;
`;

const SkillsWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 3vh 45px 3vh 0;
	/* margin-right: 45px; */
`;

const SkillsRow = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 500px;
`;

const Skill = styled.p`
	margin: 4px 0;
`;

const ListStyle = styled.span`
	color: #48dbfb;
	margin-right: 10px;
`;

const ToolsWrapper = styled(SkillsWrapper)``;

const ToolsRow = styled(SkillsRow)``;

const Tool = styled(Skill)``;

const Skills = () => {
	return (
		<Wrapper>
			<hr style={{ "margin-right": "30px" }} /> {/* A line separator*/}
			<Heading>Skills & Tooling</Heading>
			<p style={{ "margin-right": "30px" }}>
				Listed below are some of the skills that I have learned and had
				the opportunity to work with.
			</p>
			<SkillsWrapper>
				<SkillsRow>
					<Skill>
						<ListStyle>✽</ListStyle> HTML5 & CSS3
					</Skill>
					<Skill>
						<ListStyle>✽</ListStyle> Javascript ES6
					</Skill>
					<Skill>
						<ListStyle>✽</ListStyle> React.js
					</Skill>
				</SkillsRow>
				<SkillsRow>
					<Skill>
						<ListStyle>✽</ListStyle> Node.js
					</Skill>
					<Skill>
						<ListStyle>✽</ListStyle> Express.js
					</Skill>
					<Skill>
						<ListStyle>✽</ListStyle> Rust
					</Skill>
				</SkillsRow>
			</SkillsWrapper>
			
			<p style={{ "margin-right": "30px" }}>Here lies the tools that make all of this possible.</p>
			<ToolsWrapper>
				<ToolsRow>
					<Tool>
						<ListStyle>✽</ListStyle> Linux
					</Tool>
					<Tool>
						<ListStyle>✽</ListStyle> Git
					</Tool>
				</ToolsRow>

				<ToolsRow>
					<Tool>
						<ListStyle>✽</ListStyle> Visual Studio Code
					</Tool>
					<Tool>
						<ListStyle>✽</ListStyle> Insomnia
					</Tool>
				</ToolsRow>
			</ToolsWrapper>
		</Wrapper>
	);
};

export default Skills;