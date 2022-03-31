import React from 'react';

import NameAndMark from './name-and-mark/name-and-mark';
import Rating from './rating/rating';
import Features from './features/features';
import Price from './price/price';
import Goods from './goods/goods';
import Host from './host/host';
import Comments from './comments/comments';

import OfferType from '../../types/offer-type/offer-type';
import CommentType from '../../types/offer-type/comment-type/comment-type';

type PropertyProps = {
  currentProperty: OfferType,
  comments: CommentType[],
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>,
}

function Property({ currentProperty, comments, setComments }: PropertyProps) {
  return (
    <div className="property__container container">
      <div className="property__wrapper">
        <NameAndMark currentProperty={currentProperty} isPremium={currentProperty.isPremium} title={currentProperty.title} />
        <Rating rating={currentProperty.rating} />
        <Features type={currentProperty.type} bedrooms={currentProperty.bedrooms} maxAdults={currentProperty.maxAdults} />
        <Price price={currentProperty.price} />
        <Goods goods={currentProperty.goods} />
        <Host host={currentProperty.host} description={currentProperty.description} />
        <Comments comments={comments} setComments={setComments} />
      </div>
    </div>
  );
}

export default Property;
