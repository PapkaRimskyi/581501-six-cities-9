import { MouseEvent } from 'react';

import SortingItem from './sorting-item/sorting-item';

import { SORTING_LIST, SORTING_LIST_ENUM } from '../../../const/sorting-list';

type SortingListProps = {
  isListOpen: boolean,
  sortType: SORTING_LIST_ENUM,
  optionClickHandler: (e: MouseEvent) => void,
}

function SortingList({ isListOpen, sortType, optionClickHandler }: SortingListProps) {
  return (
    <ul className={`places__options places__options--custom${isListOpen ? ' places__options--opened': ''}`}>
      {SORTING_LIST.map((sortOption) =>
        <SortingItem key={sortOption} sortType={sortType} sortOption={sortOption} optionClickHandler={optionClickHandler} />,
      )}
    </ul>
  );
}

export default SortingList;
