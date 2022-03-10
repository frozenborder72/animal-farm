import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAnimals } from '../lib/api';

import birds from '../sounds/birds.mp3';
import cats from '../sounds/cats.mp3';
import dogs from '../sounds/dogs.mp3';
import fish from '../sounds/fish.mp3';
import horses from '../sounds/horses.mp3';
import pigs from '../sounds/pigs.mp3';

const sounds = { birds, cats, dogs, fish, horses, pigs };

const Animals = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [animalPhotos, setAnimalPhotos] = useState(null);

  const audio = new Audio(sounds[searchTerm]);

  useEffect(() => {
    searchTerm &&
      getAnimals(searchTerm).then(({ data }) =>
        // setAnimalPhotos([...data.photos])
        setAnimalPhotos(data.videos)
      );
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const playAudio = () => audio.play();

  return (
    <>
      <select name='animal' onChange={handleChange}>
        <option>Select an animal</option>
        <option value='dogs'>Dogs</option>
        <option value='cats'>Cats</option>
        <option value='birds'>Birds</option>
        <option value='fish'>Fish</option>
        <option value='horses'>Horses</option>
        <option value='pigs'>Pigs</option>
      </select>

      {!animalPhotos ? (
        <p>Loading...</p>
      ) : (
        animalPhotos.map(photo => (
          <Link key={photo.id} to={`/single/${photo.id}/${searchTerm}`}>
            <img
              src={photo.video_pictures[0].picture}
              alt={photo.alt}
              onClick={playAudio}
            />
          </Link>
        ))
      )}
    </>
  );
};

export default Animals;
