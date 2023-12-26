import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FavoriteFilm from '../../components/FavoriteFilm/FavoriteFilm';
import NoLikeFilm from '../../components/NoLikeFilm/NoLikeFilm';
import { clearItems, selectFilm } from '../../redux/slices/listSlice';

import './FavoriteFilms.css';

const FavoriteFilms = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectFilm);
  const countFilm = items.reduce((sum, item) => sum + item.count, 0);
  if (countFilm == 0) {
    return <NoLikeFilm />;
  }
  const clear = () => {
    if (window.confirm('Delete all list?')) {
      dispatch(clearItems());
    }
  };

  return (
      <div className="favorite_list">
        <div className="favorite_top">
          <p className="favorite_title">Favotite films</p>
          <p className="favorite_title">{countFilm} Films </p>
          <div onClick={clear} className="favorite_clear">X</div>
        </div>
        <div className="favorite_items">
          {items.map((item) => (
            <FavoriteFilm key={item.id} {...item} />
          ))}
        </div>
      </div>
  );
};

export default FavoriteFilms;
