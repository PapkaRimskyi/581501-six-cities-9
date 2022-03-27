import { generatePath } from 'react-router-dom';

import PlaceCard from './place-card/place-card';
import NeighborsCard from './neighbors-card/neighbors-card';
import FavoritesCard from './favorites-card/favorites-card';

import OfferType from '../../types/offer-type';

import { PLACES_CLASS, PLACES_PAGE_FLAG } from './const';
import ROUTES_PATHS from '../../const/routes-paths';

type PlacesListProps = {
  mainClass: PLACES_CLASS,
  pageFlag: PLACES_PAGE_FLAG,
  citySpots: OfferType[],
  hoverCardHandlers?: {
    onMouseEnterHandler: (id: string) => void,
    onMouseLeaveHandler: () => void,
  }
}

function getCardLinkPath(id: string) {
  return generatePath(ROUTES_PATHS.ROOM, { id });
}

function PlacesList({ mainClass, pageFlag, citySpots, hoverCardHandlers }: PlacesListProps) {

  function getCard(cardInfo: OfferType) {
    switch(pageFlag) {
      case PLACES_PAGE_FLAG.MAIN:
        return <PlaceCard key={cardInfo.id} cardInfo={cardInfo} linkHref={getCardLinkPath(String(cardInfo.id))} onMouseEnterHandler={() => hoverCardHandlers?.onMouseEnterHandler(String(cardInfo.id))} onMouseLeaveHandler={() => hoverCardHandlers?.onMouseLeaveHandler()} />;
      case PLACES_PAGE_FLAG.OFFER:
        return <NeighborsCard key={cardInfo.id} cardInfo={cardInfo} linkHref={getCardLinkPath(String(cardInfo.id))} />;
      case PLACES_PAGE_FLAG.FAVORITES:
        return <FavoritesCard key={cardInfo.id} cardInfo={cardInfo} linkHref={getCardLinkPath(String(cardInfo.id))} />;
      default:
        return null;
    }
  }

  return (
    <div className={mainClass}>
      {citySpots.map((cardInfo) => getCard(cardInfo))}
    </div>
  );
}

export default PlacesList;
