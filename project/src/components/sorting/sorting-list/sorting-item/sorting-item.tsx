import { MouseEvent } from 'react';

import { SORTING_LIST_ENUM } from '../../../../const/sorting-list';

type SortingItemProps = {
  sortType: SORTING_LIST_ENUM,
  sortOption: SORTING_LIST_ENUM,
  optionClickHandler: (e: MouseEvent) => void,
}

function SortingItem({ sortType, sortOption, optionClickHandler }: SortingItemProps) {
  return (
    <li
      className={`places__option${sortType === sortOption ? ' places__option--active' : ''}`}
      tabIndex={0}
      onClick={optionClickHandler}
    >
      {sortOption}
    </li>
  );
}

export default SortingItem;
