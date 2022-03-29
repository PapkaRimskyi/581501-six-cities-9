import OfferType from '../../../types/offer-type/offer-type';

import FavoritesList from './favorites-list/favorites-list';

type NotEmptyProps = {
  favoritesCards: OfferType[],
}

function NotEmpty({ favoritesCards }: NotEmptyProps) {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>

          <FavoritesList favoritesCards={favoritesCards} />

        </section>
      </div>
    </main>
  );
}

export default NotEmpty;
