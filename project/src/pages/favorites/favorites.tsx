import useAppSelector from '../../hooks/use-app-selector';

import Empty from '../../components/favorites/empty/empty';
import NotEmpty from '../../components/favorites/not-empty/not-empty';
import Footer from '../../components/footer/footer';

function Favorites() {
  const favoritesCards = useAppSelector((state) => state.favorites);

  return (
    <div className="page">
      {!favoritesCards.length ? <Empty /> : <NotEmpty favoritesCards={favoritesCards} />}
      <Footer />
    </div>
  );
}

export default Favorites;
