// import React from 'react';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import Socitem from 'components/Socitem/Socitem';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Logo/>
      <Nav/>
      <Socitem/>
    </header>
  );
}

export default Header;
