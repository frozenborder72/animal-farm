import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAnimals } from '../lib/api';

const Animals = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [animalPhotos, setAnimalPhotos] = useState(null);

  useEffect(() => {
    searchTerm &&
      getAnimals(searchTerm).then(({ data }) =>
        setAnimalPhotos([...data.photos])
      );
  }, [searchTerm]);

  const handleChange = e => setSearchTerm(e.target.value);

  return (
    <>
      <select name='animal' onChange={handleChange}>
        <option>Select an animal</option>
        <option value='dogs'>Dogs</option>
        <option value='cats'>Cats</option>
      </select>

      {!animalPhotos ? (
        <p>Loading...</p>
      ) : (
        animalPhotos.map(photo => (
          <Link key={photo.id} to={`/single/${photo.id}/${searchTerm}`}>
            <img src={photo.src.medium} alt={photo.alt} />
          </Link>
        ))
      )}
    </>
  );
};

export default Animals;
