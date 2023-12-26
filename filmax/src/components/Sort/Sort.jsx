import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSort, setSort } from '../../redux/slices/filterSlice';

import './Sort.css';

export const sortList = [
  { name: 'popular (top)', sortProperty: 'imDbRating' },
  { name: 'popular  (down)', sortProperty: '-imDbRating' },
  { name: 'year (top)', sortProperty: 'year' },
  { name: 'year (down)', sortProperty: '-year' },
];

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const sortRef = React.useRef();

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };


  return (
    <div ref={sortRef} className="sort">
      <div className="sort_label" onClick={() => setOpen(!open)}>
        <b>Sort: </b>
        <span >{sort.name}</span>
      </div>
      {open && (
        <div className="sort_popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
