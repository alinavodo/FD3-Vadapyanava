import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Film.css';
import like from '../../assets/img/like.svg';

import {addItem, selectFilmItemById } from '../../redux/slices/listSlice';


function Film({ id, title, year, genre, imDbRating, image }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectFilmItemById(id));

  const addedItem = cartItem ? cartItem.count : 0;


  const onClickAdd = () => {
    const item = {
      id,
      title,
      year,
      genre,
      imDbRating,
      image,
    };
    dispatch(addItem(item));

  };

  return (
    <>
      <div className='movies'>
            <div className='movie'>
                <div className="movie-cover-inner">
                  <img src={image} className="movie-cover" alt={title}/>
                  <div className="movie-cover-darkened"></div>
                  <div className="movie-average">{imDbRating}</div>
                </div>
                <div className="movie-info">
                    <span className="movie-title-main">{title}   {year}</span>
                    <span className="movie-title-genre">{genre}</span>
                    <button className={addedItem > 0 ? 'none' :'button' } onClick={onClickAdd}>
                      <img className='like_button' src={like}></img>
                    </button>
                </div>
            </div>   
       </div>
  </>
  );
}

export default Film;
