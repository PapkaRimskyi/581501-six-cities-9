import Empty from '../../components/favorites/empty/empty';
import NotEmpty from '../../components/favorites/not-empty/not-empty';
import Footer from '../../components/footer/footer';

import OfferType from '../../types/offer-type';

type FavoritesProps = {
  favoritesCards: OfferType[],
}

function Favorites({ favoritesCards }: FavoritesProps) {
  return (
    <div className="page">
      {!favoritesCards.length ? <Empty /> : <NotEmpty favoritesCards={favoritesCards} />}
      <Footer />
    </div>
  );
}

export default Favorites;
