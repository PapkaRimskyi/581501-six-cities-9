import React, { useState } from 'react';
import { changeSortingType } from '../../store/actions/sorting-actions/sorting-actions';
import useAppDispatch from '../../hooks/use-app-dispatch';

import SORTING_LIST from '../../const/sorting-list';

function Sorting({ sortType }: { sortType: string }) {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function listTypeClickHandler(e: React.MouseEvent) {
    e.preventDefault();
    setIsListOpen((prevState) => !prevState);
  }

  function optionClickHandler(e: React.MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLLIElement;
    const clickedSortingType = target.textContent as string;
    setIsListOpen(false);
    dispatch(changeSortingType(clickedSortingType));
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={listTypeClickHandler}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isListOpen ? ' places__options--opened': ''}`}>
        {SORTING_LIST.map((sort) => (
          <li
            key={sort}
            className={`places__option${sortType === sort ? ' places__option--active' : ''}`}
            tabIndex={0}
            onClick={optionClickHandler}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
