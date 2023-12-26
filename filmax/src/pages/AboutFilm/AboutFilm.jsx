import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import './AboutFilm.css';


const AboutFilm = () => {
  const [film, setFilm] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchFilm() {
      try {
        const { data } = await axios.get('https://657315f9192318b7db418659.mockapi.io/items/' + id);
        setFilm(data);
      } catch (error) {
        alert('Error');
        navigate('/');
      }
    }

    fetchFilm();
  }, []);

  if (!film) {
    return 'Loading...';
  }

  return (
    <>
    <div className="about_film">
      <img className="about_img" src={film.image} />
      <div className='info'>
        <h2 className="movie-title">{film.title}</h2>
        <p className="movie-year">{film.year}</p>
        <div className='movie-details'>
          <p className='movie-rating'>{film.imDbRating}</p>
          <p className='movie-genre'>{film.genre}</p>
        </div>
        <p className='movie-duration'>{film.crew}</p>
      </div>
    </div>
    </>
  );
};

export default AboutFilm;
