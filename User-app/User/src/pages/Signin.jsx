import React, { Component, useState } from 'react';
import { GlobalStyles } from '../styles/global-styles';
import { FooterContainer } from '../components/Welcome/Container/Footer';
import HeaderContainer from '../components/Welcome/Container/Header';
import Form from '../components/Welcome/Form';
import { signin } from '../api/userAPIs';
import { useNavigate } from "react-router-dom";


export default function SignIn() {
  let navigate = useNavigate();
  const [Password, setPassword] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');
  const [Responce, setResponce] = useState('');
  const handleSignIn = (event) => {
    event.preventDefault();
    const user = {
      email: EmailAddress,
      password: Password,
    }
    signin(user).then((data) => {
      if (data.data.statusCode == 200) {
        navigate('/Home');
      }
      else {
        alert(data.data.error);
      }
    }
    );

  };
  return (
    <React.Fragment>
      <GlobalStyles />
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {/*  <Form.Error ></Form.Error>
 */}
          <Form.Base onSubmit={handleSignIn} >
            <Form.Input
              placeholder="Email address"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </React.Fragment>

  );
};