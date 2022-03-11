import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAnimals } from '../lib/api';
import Masonry from '@mui/lab/Masonry';

import birds from '../assets/sounds/birds.mp3';
import cats from '../assets/sounds/cats.mp3';
import dogs from '../assets/sounds/dogs.mp3';
import fish from '../assets/sounds/fish.mp3';
import horses from '../assets/sounds/horses.mp3';
import pigs from '../assets/sounds/pigs.mp3';

import farm from '../assets/images/farm.png';

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
      <div className='select is-rounded is-medium '>
        <select
          className='select has-text-white has-background-dark'
          name='animal'
          onChange={handleChange}
        >
          <option>Select an animal</option>
          <option value='dogs'>Dogs</option>
          <option value='cats'>Cats</option>
          <option value='birds'>Birds</option>
          <option value='fish'>Fish</option>
          <option value='horses'>Horses</option>
          <option value='pigs'>Pigs</option>
        </select>
      </div>

      <section className='section section-home'>
        {!animalPhotos ? (
          <div className='image-container'>
            <img src={farm} alt='' />
          </div>
        ) : (
          <div className='masonry-container'>
            <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
              {animalPhotos.map(photo => (
                <Link key={photo.id} to={`/single/${photo.id}/${searchTerm}`}>
                  <img src={photo.image} alt={photo.alt} onClick={playAudio} />
                </Link>
              ))}
            </Masonry>
          </div>
        )}
      </section>
    </>
  );
};

export default Animals;
