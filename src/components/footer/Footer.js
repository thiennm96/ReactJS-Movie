import React from 'react';

import { Link } from 'react-router-dom';

import bg from '../../assets/images/footer-bg.jpg';
import logo from '../../assets/images/logo.jpg';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt='' />
            <Link to='/'>The Movies Trailer</Link>
          </div>
        </div>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Help Center</Link>
            <Link to='/'>Account</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
