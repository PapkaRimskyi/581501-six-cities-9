import CoordType from './coordType';
import GoodType from './goodType';
import UserType from './userType';
import ImageType from './imageType';

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
