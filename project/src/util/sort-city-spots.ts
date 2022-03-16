import OfferType from '../types/offerType';

function sortFromCheapToExpensive(data: OfferType[]) {
  return [...data].sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    } else if (a.price < b.price) {
      return -1;
    }
    return 0;
  });
}

function sortFromExpensiveToCheap(data: OfferType[]) {
  return [...data].sort((a, b) => {
    if (a.price > b.price) {
      return -1;
    } else if (a.price < b.price) {
      return 1;
    }
    return 0;
  });
}

function sortFromTopRatingToLow(data: OfferType[]) {
  return [...data].sort((a, b) => {
    if (a.rating > b.rating) {
      return -1;
    } else if (a.rating < b.rating) {
      return 1;
    }
    return 0;
  });
}

function sortCitySpots(sortType: string, citySpots: OfferType[]) {
  switch (sortType) {
    case 'Price: low to high':
      return sortFromCheapToExpensive(citySpots);
    case 'Price: high to low':
      return sortFromExpensiveToCheap(citySpots);
    case 'Top rated first':
      return sortFromTopRatingToLow(citySpots);
    default:
      return citySpots;
  }
}

export default sortCitySpots;
