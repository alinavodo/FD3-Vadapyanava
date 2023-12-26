import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import debounce from 'lodash.debounce';

import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const input = React.useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    input.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );


  return (
    <div className='search'>
      <input
        ref={input}
        value={value}
        placeholder="What you want?"
        onChange={onChangeInput}
        className='input'
  
      />
      {value && (
        <svg
          onClick={onClickClear}
          className='cross'
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
