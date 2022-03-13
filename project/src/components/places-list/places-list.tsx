import { Dispatch, useCallback, SetStateAction } from 'react';

import PlaceCard from './place-card/place-card';

import OfferType from '../../types/offerType';

type PlacesListProps = {
  arendaOfferData: OfferType[],
  setCurrentPoint: Dispatch<SetStateAction<number | null>>,
}

function PlacesList({ arendaOfferData, setCurrentPoint }: PlacesListProps) {
  const onMouseLeaveHandler = useCallback(() => setCurrentPoint(null), []);

  function onMouseEnterHandler(id: number) {
    setCurrentPoint(id);
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
