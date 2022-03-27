import React, { useMemo } from 'react';

import CityCategory from './city-category/city-category';
import PlacesList from '../../places-list/places-list';

import OfferType from '../../../types/offer-type';

import { PLACES_CLASS, PLACES_PAGE_FLAG } from '../../places-list/const';
import { CITY_LIST } from '../../../const/city-list';

type NotEmptyProps = {
  favoritesCards: OfferType[],
}

function NotEmpty({ favoritesCards }: NotEmptyProps) {
  const citiesWithFavoritesCard = useMemo(() => CITY_LIST.filter((city) => favoritesCards.find((favorite) => city === favorite.city.name)), [favoritesCards]);

  function getFavoritesPlacesByCity(city: string) {
    return favoritesCards.filter((card) => card.city.name === city);
  }

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {citiesWithFavoritesCard.map((city) => (
              <li key={city} className="favorites__locations-items">
                <CityCategory city={city} />

                <PlacesList
                  mainClass={PLACES_CLASS.FAVORITES_PLACES_LIST}
                  pageFlag={PLACES_PAGE_FLAG.FAVORITES}
                  citySpots={getFavoritesPlacesByCity(city)}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default NotEmpty;
