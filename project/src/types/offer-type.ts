import CoordType from './coord-type';
import GoodType from './good-type';
import UserType from './user-type';
import ImageType from './image-type';

type OfferType = {
  bedrooms: number,
  city: {
    location: CoordType,
    name: string,
  },
  description: string,
  goods: GoodType[],
  host: UserType,
  id: number,
  images: ImageType[],
  isFavorite: boolean,
  isPremium: boolean,
  location: CoordType,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

export default OfferType;
