import axios from 'axios';

const animalsBaseUrl = 'https://api.pexels.com/v1/';

export const getAnimals = animal =>
  axios.get(`${animalsBaseUrl}/search?query=${animal}`, {
    headers: {
      Authorization: '563492ad6f9170000100000117a1a802fd2943dfbf315b498d67f4b0',
    },
  });

export const getSingleAnimal = id =>
  axios.get(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: '563492ad6f9170000100000117a1a802fd2943dfbf315b498d67f4b0',
    },
  });

export const getQuote = searchTerm =>
  axios.get(`https://favqs.com/api/quotes/?filter=${searchTerm}`, {
    headers: {
      Authorization: 'Bearer 4ecbcb038f4655a19303564b621e6069',
    },
  });
