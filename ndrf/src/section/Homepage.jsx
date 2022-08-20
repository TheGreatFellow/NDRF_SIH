import React from 'react';
import styled from 'styled-components';
import AboutSection from '../components/AboutSection';
import DonationsContainer from '../components/DonationsContainer';
import Statistics from '../components/Statistics';


const Homepage = (props) =>{
    return(
        <Container>
            <DonationsContainer/>
            <AboutSection/>
            <Statistics/>
        </Container>
    )
}


const Container = styled.main`
    position: relative;
    overflow-x: hidden;
    display: block;
    padding: 0 calc(2.5vw + 2px);

    &:after{
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
    
`

export default Homepage;