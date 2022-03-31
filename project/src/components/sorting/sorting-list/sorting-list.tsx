import React, { MouseEvent } from 'react';

import useAppDispatch from '../../../hooks/use-app-dispatch';

import { changeSortType } from '../../../store/sorting/sorting';

import SortingItem from './sorting-item/sorting-item';

import { SORTING_LIST, SORTING_LIST_ENUM } from '../../../const/sorting-list';

type SortingListProps = {
  isListOpen: boolean,
  sortType: SORTING_LIST_ENUM,
  setIsListOpen:  React.Dispatch<React.SetStateAction<boolean>>,
}

function SortingList({ isListOpen, sortType, setIsListOpen }: SortingListProps) {
  const dispatch = useAppDispatch();

  function optionClickHandler(e: MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLLIElement;
    const clickedSortingType = target.textContent as SORTING_LIST_ENUM;
    setIsListOpen(false);
    dispatch(changeSortType(clickedSortingType));
  }

  return (
    <ul className={`places__options places__options--custom${isListOpen ? ' places__options--opened': ''}`}>
      {SORTING_LIST.map((sortOption) =>
        <SortingItem key={sortOption} sortType={sortType} sortOption={sortOption} optionClickHandler={optionClickHandler} />,
      )}
    </ul>
  );
}

export default SortingList;
