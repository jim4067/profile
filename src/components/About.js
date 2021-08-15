<<<<<<< HEAD
=======
import React from "react";
import styled, { keyframes } from "styled-components";

//animation 
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


//styles
const Wrapper = styled.div`
    animation: ${SlideIn} ease-in 1s;
	color: ${({ dark }) => (dark ? "#eceff4" : "#4c566a")};
	line-height: 30px;

    @media (min-width: 1500px){
        font-size: 2vh;
        line-height: 2;
    }
`;

const ParagraphContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
`;

//use flex for the sides
const Sides = styled.div`
	/* width: 600px; */
    width:43vw;


    //for styled greater than 2500px
    @media (min-width: 1400px){
        width: 45vw;
    }
    //for styles less than 1200px
    @media (max-width: 1200px) {
        width: 100vw;
    }
`;
const SideOne = styled(Sides)`
	margin-bottom: 14px;
	padding-right: 30px;
`;

const SideTwo = styled(Sides)`
    margin-right: 30px;
    justify-self: flex-end;
`;

const About = ({ dark }) => {
    function calculate_age() {
        const birth_year = 2002;
        const birth_month = 6; //June
        const month_now = new Date().getMonth() + 1;

        let current_age = 0;

        if (month_now > birth_month) {
            current_age = new Date().getFullYear() - birth_year;
            return current_age;
        }
        current_age = new Date().getFullYear() - birth_year - 1;
        return current_age;

    }

    return (
        <Wrapper dark={dark}>
            <ParagraphContainer className="about-me-text">
                <SideOne className="paragraph-side-1">
                    <p style={{ "margin-bottom": "14px" }}>
                        The discovery of fire / ( awareness of its existence )
                        must have been an evangelical moment for our ancestors.
                        The ability to keep their caves warm, eat warm pizza and
                        boil bathing water. The last one there might be
                        far-fetched but, it was FIRE! The discovery of the
                        century you might say.
                    </p>
                    <p>
                        I love Javascript and appreciate the flexibility it
                        offers. But what does this have to do with the
                        meticulous, intellectual crafted paragraph above about
                        human evolution? Like fire, Javascript if not properly
                        handled can bring down the infamous 'production server'.
                        That's where I come in.
                    </p>
                </SideOne>

                <SideTwo className="paragraph-side-2">
                    <p>
                        I'm Jimmy. An {calculate_age()} year old astrophysics
                        student at the University of Nairobi. I am self-taught
                        in full stack web development and also a self-declared
                        Javascript language aficionado who is passionate about
                        how society interacts with technology and how we can
                        effectively use it to impact peoples lives positively. I
                        am currently open to a position where I can make a
                        difference using my skills.
                    </p>
                </SideTwo>
            </ParagraphContainer>
        </Wrapper>
    );
};

export default About;
>>>>>>> 3f2ff463f827f67c00edb5fd1d46045b9f6be883
