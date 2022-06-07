import React, { Component, useState } from 'react';
import { GlobalStyles } from '../styles/global-styles';
import HeaderContainer from '../components/Welcome/Container/Header';
import Form from '../components/Welcome/Form/index';
import { FooterContainer } from '../components/Welcome/Container/Footer';
import { signup } from '../api/userAPIs';
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    let navigate = useNavigate();
    const [UserName, setUserName] = useState('');
    const [EmailAddress, setEmailAddress] = useState('');
    const [Phone, setPhone] = useState('');
    const [Password, setPassword] = useState('');
    const handleSignup = (event) => {
        event.preventDefault();
        const user = {
            userName: UserName,
            email: EmailAddress,
            password: Password,
            image: "noimage",
            phone: Phone,
            role: "user",
        }
        signup(user).then((data) => {
            if (data.data.statusCode == 200) {
                navigate('/Home');
            }
            else {
                alert(data.data.error);
            }
        });

    };
    return (
        <React.Fragment>
            <GlobalStyles />
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {/* {error && <Form.Error>{error}</Form.Error>} */}

                    <Form.Base onSubmit={handleSignup}>
                        <Form.Input
                            placeholder="User Name"
                            onChange={({ target }) => setUserName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="Phone"
                            onChange={({ target }) => setPhone(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit >
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </React.Fragment>
    );
};