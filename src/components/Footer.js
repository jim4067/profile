import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 4vh;
`;

const Container = styled.section`
    display: flex;
    justify-content: space-between;
`;

const LinkContainer = styled.div`
    margin: 4vh 0;
`;

const Link = styled.a`
    color: inherit;

    :hover{
        cursor: pointer;
        color: blue;
    }
`;

const Footer = ({ dark }) => {

    return (
        <Wrapper>

            <hr style={{ "margin-right": "30px" }} /> {/* A line separator*/}
            <Container>
                <LinkContainer><Link href="https://twitter.com/jim_4067">twitter</Link></LinkContainer>
                <LinkContainer><Link href="https://github.com/jim4067">github</Link></LinkContainer>
                <LinkContainer style={{"margin-right": "30px"}} ><Link href="https://dev.to/jim_4067">dev community</Link></LinkContainer>
            </Container>

        </Wrapper>
    );
}

export default Footer;