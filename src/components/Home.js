import React from 'react';
import Animals from './Animals';

import Header from './Header';

const Home = () => {
  return (
    <>
      <section className='hero is-fullheight is-dark'>
        <div className='hero-head mg-medium'>
          <div className='has-text-centered'>
            <Header />
            <Animals />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
