import { useState } from 'react';

import CityList from '../../components/city-list/city-list';
import Sorting from '../../components/sorting/sorting';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';

import OfferType from '../../types/offerType';

type MainProps = {
  arendaOfferData: OfferType[],
};

function Main({ arendaOfferData }: MainProps): JSX.Element {
  const [currentPoint, setCurrentPoint] = useState<null | number>(null);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <CityList />

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{arendaOfferData.length} places to stay in Amsterdam</b>
            <Sorting />
            <PlacesList
              mainClass='cities__places-list places__list tabs__content'
              pageFlag='main'
              arendaOfferData={arendaOfferData}
              setCurrentPoint={setCurrentPoint}
            />
          </section>
          <div className="cities__right-section">
            <Map
              mainClass='cities__map'
              citySettings={arendaOfferData[0].city.location}
              points={arendaOfferData}
              currentPoint={currentPoint}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
