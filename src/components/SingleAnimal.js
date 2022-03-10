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
      {!animal ? (
        <p>Loading...</p>
      ) : (
        // <img src={animal.src.original} alt={animal.alt} />
        <video controls src={animal.video_files[3].link}></video>
      )}
      {quote && (
        <p>
          {quote.body}, {quote.author}
        </p>
      )}
      <Link to='/'>Go back</Link>
    </div>
  );
};

export default SingleAnimal;
