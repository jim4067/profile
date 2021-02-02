import React from 'react';
import styled from 'styled-components';

//styles
const Wrapper = styled.div`
    color: ${({ dark }) => dark ? "#eceff4" : "#4c566a"};
    line-height: 30px;
`;

const ParagraphContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

const Sides = styled.div`
    width: 600px;
`;
const SideOne = styled(Sides)`
    margin-bottom: 14px;
    padding-right: 30px;
`;

const SideTwo = styled(Sides)`
    
`;

const About = ({ dark }) => {
    function calculate_age() {
        const birth_year = 2002;
        const birth_month = 6; //June
        const month_now = new Date().getMonth();

        let current_age;

        if (month_now > birth_month) {
            current_age = new Date().getFullYear() - birth_year;
            return current_age;
        }
        current_age = (new Date().getFullYear() - birth_year) - 1;
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
                        handled can bring down an entire production server.
                        That's where I come in.
					</p>
                </SideOne>

                <SideTwo className="paragraph-side-2">
                    <p>
                        I'm Jimmy. An {calculate_age()} year old full stack web
						developer and Javascript language aficionado who is
						passionate about how society interacts with technology
						and how we can effectively use it to impact peoples
						lives positively. I am currently seeking a position where
						I can make a difference using my knowledge.
					</p>
                </SideTwo>
            </ParagraphContainer>
        </Wrapper>
    );
};

export default About;