import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleAnimal, getQuote } from '../lib/api';

const SingleAnimal = () => {
  const { id, searchTerm } = useParams();

  const [animal, setAnimal] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getSingleAnimal(id).then(({ data }) => setAnimal({ ...data }));

    getQuote(searchTerm).then(({ data }) =>
      setQuote({
        ...data.quotes[Math.floor(Math.random() * data.quotes.length)],
      })
    );
  }, [id, searchTerm]);

  return (
    <div>
      <section className='section has-background-dark section-centered'>
        <div className='container'>
          <div className='card has-background-dark'>
            <div className='video-container'>
              {!animal ? (
                <p>Loading...</p>
              ) : (
                <video controls src={animal.video_files[3].link}></video>
              )}
              {quote && (
                <>
                  <div className='card-content'>
                    <p className='quote'>{quote.body}</p>
                    <p>
                      <em>{quote.author}</em>
                    </p>
                  </div>
                  <div className='card-footer'>
                    <div className='card-footer-item button'>
                      <Link to='/'>Home</Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleAnimal;
