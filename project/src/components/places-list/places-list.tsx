import { useState } from 'react';

import PlaceCard from './place-card/place-card';

import OfferType from '../../types/offerType';

type PlacesListProps = {
  arendaOfferData: OfferType[],
}

function PlacesList({ arendaOfferData }: PlacesListProps) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  function onMouseEnterHandler(id: number) {
    setHoveredCard(id);
  }

  function onMouseLeaveHandler() {
    setHoveredCard(null);
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
