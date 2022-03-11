import React from 'react';
import bubbles from '../assets/images/bubbles.png';

const Header = () => (
  <>
    <img src={bubbles} alt='' className='bubble-image' />
    <p className='title has-text-centered mt-1'>Quote Farm</p>
  </>
);

export default Header;
