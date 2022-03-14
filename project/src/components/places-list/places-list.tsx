import { Dispatch, SetStateAction } from 'react';
import useHoverCard from '../../hooks/useHoverCard';

import PlaceCard from './place-card/place-card';
import NeighborsCard from '../neighbors-card/neighbors-card';

import OfferType from '../../types/offerType';

type PlacesListProps = {
  mainClass: string,
  pageFlag: 'main' | 'offer',
  arendaOfferData: OfferType[],
  setCurrentPoint: Dispatch<SetStateAction<number | null>>,
}

function PlacesList({ mainClass, pageFlag, arendaOfferData, setCurrentPoint }: PlacesListProps) {
  const { onMouseEnterHandler, onMouseLeaveHandler } = useHoverCard(setCurrentPoint);

  function getCard(cardInfo: OfferType) {
    switch(pageFlag) {
      case 'main':
        return <PlaceCard key={cardInfo.id} cardInfo={cardInfo} onMouseEnterHandler={() => onMouseEnterHandler(cardInfo.id)} onMouseLeaveHandler={onMouseLeaveHandler} />;
      case 'offer':
        return <NeighborsCard key={cardInfo.id} cardInfo={cardInfo} onMouseEnterHandler={() => onMouseEnterHandler(cardInfo.id)} onMouseLeaveHandler={onMouseLeaveHandler} />;
      default:
        return null;
    }
  }

  return (
    <div className={mainClass}>
      {arendaOfferData.map((cardInfo) => getCard(cardInfo))}
    </div>
  );
}

export default PlacesList;
