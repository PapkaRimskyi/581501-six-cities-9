import PlacesList from '../../places-list/places-list';

import OfferType from '../../../types/offer-type/offer-type';

import { PLACES_CLASS, PLACES_PAGE_FLAG } from '../../places-list/const';

type NearPlacesProps = {
  propertyNearBy: OfferType[],
}

function NearPlaces({ propertyNearBy }: NearPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlacesList
        mainClass={PLACES_CLASS.NEAR_PLACES_LIST}
        pageFlag={PLACES_PAGE_FLAG.OFFER}
        citySpots={propertyNearBy}
      />
    </section>
  );
}

export default NearPlaces;
