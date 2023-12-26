import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home';
import FavoriteFilms from './pages/FavoriteFilms/FavoriteFilms';
import AboutFilm from './pages/AboutFilm/AboutFilm';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
      <Route path="" element={<Home />} />
        <Route path="favotite" element={<FavoriteFilms />} />
        <Route path="film/:id" element={<AboutFilm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
