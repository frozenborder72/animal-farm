import axios from 'axios';

const animalsBaseUrl = 'https://api.pexels.com/videos';

export const getAnimals = animal =>
  axios.get(`${animalsBaseUrl}/search?query=${animal}`, {
    headers: {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    },
  });

export const getSingleAnimal = id =>
  axios.get(
    `https://cryptic-everglades-76066.herokuapp.com/${animalsBaseUrl}/videos/${id}`,
    {
      headers: {
        Authorization: process.env.REACT_APP_PEXELS_API_KEY,
      },
    }
  );

export const getQuote = searchTerm =>
  axios.get(`https://favqs.com/api/quotes/?filter=${searchTerm}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_FAVQS_BEARER_TOKEN}`,
    },
  });
