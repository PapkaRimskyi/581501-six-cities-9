import { useState, MouseEvent } from 'react';

import useAppDispatch from '../../hooks/use-app-dispatch';

import { changeSortType } from '../../store/sorting/sorting';

import SortingList from './sorting-list/sorting-list';

import { SORTING_LIST_ENUM } from '../../const/sorting-list';

type SortingProps = {
  sortType: SORTING_LIST_ENUM,
}

function Sorting({ sortType }: SortingProps) {
  const dispatch = useAppDispatch();

  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  function listTypeClickHandler(e: MouseEvent) {
    e.preventDefault();
    setIsListOpen((prevState) => !prevState);
  }

  function optionClickHandler(e: MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLLIElement;
    const clickedSortingType = target.textContent as SORTING_LIST_ENUM;
    setIsListOpen(false);
    dispatch(changeSortType(clickedSortingType));
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={listTypeClickHandler}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>

      <SortingList isListOpen={isListOpen} sortType={sortType} optionClickHandler={optionClickHandler} />
    </form>
  );
}

export default Sorting;
