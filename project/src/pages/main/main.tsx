import CityList from '../../components/city-list/city-list';
import Sorting from '../../components/sorting/sorting';
import PlaceCard from '../../components/place-card/place-card';

type MainProps = {
  arendaOfferData: number[],
};

function Main({ arendaOfferData }: MainProps): JSX.Element {
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
            <div className="cities__places-list places__list tabs__content">
              {arendaOfferData.map((_, i) => <PlaceCard key={`card-${_}`} />)}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
