import React, { useState, MouseEvent } from 'react';

import SortingList from './sorting-list/sorting-list';

import { SORTING_LIST_ENUM } from '../../const/sorting-list';

type SortingProps = {
  sortType: SORTING_LIST_ENUM,
}

function Sorting({ sortType }: SortingProps) {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  function listTypeClickHandler(e: MouseEvent) {
    e.preventDefault();
    setIsListOpen((prevState) => !prevState);
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

      <SortingList isListOpen={isListOpen} sortType={sortType} setIsListOpen={setIsListOpen} />
    </form>
  );
}

export default React.memo(Sorting);
