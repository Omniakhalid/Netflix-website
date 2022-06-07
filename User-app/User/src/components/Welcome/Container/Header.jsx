import React from 'react';
import  Header  from '../Header/index';
import logo from '../../../imgs/logo.svg';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to='/' src={logo} alt="Netflix" />
        <Header.ButtonLink to='/signin'>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}