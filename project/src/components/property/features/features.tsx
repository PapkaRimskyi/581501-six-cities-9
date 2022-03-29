import OfferType from '../../../types/offer-type/offer-type';

type FeaturesProps = Pick<OfferType, 'type' | 'bedrooms' | 'maxAdults'>;

function getBedRoomsText(amount: number) {
  const word = amount > 1 ? 'Bedrooms' : 'Bedroom';
  return `${amount} ${word}`;
}

function getAdultsText(amount: number) {
  const word = amount > 1 ? 'adults' : 'adult';
  return `Max ${amount} ${word}`;
}

function Features({ type, bedrooms, maxAdults }: FeaturesProps) {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {getBedRoomsText(bedrooms)}
      </li>
      <li className="property__feature property__feature--adults">
        {getAdultsText(maxAdults)}
      </li>
    </ul>
  );
}

export default Features;
