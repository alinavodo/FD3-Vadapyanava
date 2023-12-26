import React from 'react';
import qs from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';

import Film from '../components/Film/Film';
import { sortList } from '../components/Sort/Sort';

import {
  selectFilter,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';

import { fetchFilms, selectFilmData } from '../redux/slices/filmSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectFilmData);
  const { sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getFilms = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchFilms({
        sortBy,
        order,
        search,
        currentPage,
      }),
    );
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        sortProperty: sort.sortProperty,
        currentPage,
      };
      const queryString = qs.stringify(params, { skipNulls: true });
      navigate(`/?${queryString}`);
    }
    if (!window.location.search) {
      fetchFilms();
    }
  }, [sort.sortProperty, searchValue, currentPage]);



  React.useEffect(() => {
    getFilms();
  }, [sort.sortProperty, searchValue, currentPage]);


  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
      if (sort) {
        params.sort = sort;
      }
      dispatch(setFilters(params));
    }
    isMounted.current = true;
  }, []);



  const films = items.map((obj) => (
    <Link key={obj.id} to={`/film/${obj.id}`}>
      <Film {...obj} />
    </Link>
  ));


  return (
    <>
      {status === 'error' ? (<h2>Not found</h2>) : 
      (
        <div className="content">{status === 'loading' ? 'Loading' : films}</div>
      )}
      {searchValue ? (<p></p>) : (<Pagination currentPage={currentPage} onChangePage={onChangePage} />)}
    </>
  );
};

export default Home;
