import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleAnimal from './components/SingleAnimal';

const App = () => {
  console.log(process.env);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single/:id/:searchTerm' element={<SingleAnimal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
