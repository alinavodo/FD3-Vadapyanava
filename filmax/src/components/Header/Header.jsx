import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.css';

import logo from '../../assets/img/header_logo.svg';
import likeLogo from '../../assets/img/favorite.svg';


import Sort from '../Sort/Sort';
import Search from '../Search/Search';
import { selectFilm } from '../../redux/slices/listSlice';


function Header() {
    const loc = useLocation();
    const {items} = useSelector(selectFilm);
    const isMounted = React.useRef(false);

    const countFilm = items.reduce((sum, item) => sum + item.count, 0);

    React.useEffect(() => {
      if (isMounted.current) {
        const json = JSON.stringify(items);
        localStorage.setItem('film', json);
      }
      isMounted.current = true;
    }, [items]);

  return (
    <div className='header'>
        <div className='header_logo'>
            <Link to="/">
                <img src={logo}></img>
            </Link>
        </div>
            <Sort />
            <Search />
        <div>
          {loc.pathname !== '/favotite' && 
          (<Link to='/favotite'>
            <div className='likeFilm'>
                <img className='like_logo' src={likeLogo}></img>
                <span className='like_count'>{countFilm}</span>
            </div>
         </Link>)}
        </div>
    </div>
  );
}

export default Header;
