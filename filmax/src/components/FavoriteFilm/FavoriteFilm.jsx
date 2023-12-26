import React from 'react';
import { useDispatch } from 'react-redux';

import './FavoriteFilm.css';

import { addItem, removeItem } from '../../redux/slices/listSlice';

const FavoriteFilm = ({ id, title, image}) => {
  const dispatch = useDispatch();




  const removeFilm = () => {
    if (window.confirm('Delete film?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className='favorite_films'>
      <div className='favorite_film'>
        <div><img className='favorite_img' src={image} alt={title} /></div>
        <p className='favorite_title'>{title}</p>
        <p className='favorite_delete' onClick={removeFilm}>X</p>
      </div>
    </div>
  );
};

export default  FavoriteFilm;
