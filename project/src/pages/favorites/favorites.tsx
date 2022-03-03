import Footer from '../../components/footer/footer';

import OfferType from '../../types/offerType';
import FavoritesCard from '../../components/favorites-card/favorites-card';

type FavoritesProps = {
  favoritesCards: OfferType[],
}

function Favorites({ favoritesCards }: FavoritesProps) {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoritesCards.map((card) => <FavoritesCard key={card.id} cardInfo={card} />)}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;
