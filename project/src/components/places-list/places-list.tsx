import { Dispatch, SetStateAction } from 'react';

import PlaceCard from './place-card/place-card';

import OfferType from '../../types/offerType';

type PlacesListProps = {
  arendaOfferData: OfferType[],
  setCurrentPoint: Dispatch<SetStateAction<number | null>>,
}

function PlacesList({ arendaOfferData, setCurrentPoint }: PlacesListProps) {
  function onMouseEnterHandler(id: number) {
    setCurrentPoint(id);
  }

  function onMouseLeaveHandler() {
    setCurrentPoint(null);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {arendaOfferData.map((cardInfo) => (
        <PlaceCard
          key={cardInfo.id}
          cardInfo={cardInfo}
          onMouseEnterHandler={() => onMouseEnterHandler(cardInfo.id)}
          onMouseLeaveHandler={onMouseLeaveHandler}
        />
      ))}
    </div>
  );
}

export default PlacesList;
