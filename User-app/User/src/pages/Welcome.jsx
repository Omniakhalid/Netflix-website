import React, { Component } from 'react';
import JumbotronContainer from '../components/Welcome/Container/Jumbotron';
import { FooterContainer } from '../components/Welcome/Container/Footer';
import AccordionContainer from '../components/Welcome/Container/Accordion.jsx';
import { GlobalStyles } from '../styles/global-styles';
import HeaderContainer from '../components/Welcome/Container/Header';
import Feature from '../components/Welcome/Feature';
import OptForm from '../components/Welcome/Optform';

export default function Welcome() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Break />
                       
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.ButtonLink to='/signup'>Get Started</OptForm.ButtonLink>
                        <OptForm.Break />
                       
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer/>
            <FooterContainer />
        </React.Fragment>
    );
};