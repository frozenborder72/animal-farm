import React from 'react';
import Animals from './Animals';

const Home = () => {
  return (
    <>
      <section className='hero is-fullheight is-dark'>
        <div className='hero-head mg-medium'>
          <p className='title has-text-centered mt-5'> Animal Farm</p>
          <div className='has-text-centered'>
            <Animals />
          </div>
        </div>
        <div className='hero-body'></div>
      </section>
    </>
  );
};

export default Home;
