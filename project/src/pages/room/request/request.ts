import React from 'react';
import { getDataRequest } from '../../../api/requests';

import { browserHistory } from '../../../components/app/history-router/history-router';

import sortCommentsByDate from '../../../util/sort-comments-by-date';

import OfferType from '../../../types/offer-type/offer-type';
import CommentType from '../../../types/offer-type/comment-type/comment-type';

import ROUTES_PATHS from '../../../const/routes-paths';
import { API_ENDPOINT, MAX_COMMENTS } from '../../../const/request-const';

type StateSettersTypes = {
  setCurrentProperty:  React.Dispatch<React.SetStateAction<OfferType | null>>,
  setPropertyNearBy: React.Dispatch<React.SetStateAction<OfferType[]>>,
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>,
  setCurrentPoint: React.Dispatch<React.SetStateAction<string | null>>,
}

function sendRoomRequests(propertyID: string, { setCurrentProperty, setPropertyNearBy, setComments, setCurrentPoint }: StateSettersTypes) {
  const hotelData = getDataRequest<OfferType>(`${API_ENDPOINT.HOTELS}/${propertyID}`);

  hotelData.then((hotelRes) => {
    setCurrentProperty(hotelRes.data);
    setCurrentPoint(propertyID);

    const commentsData = getDataRequest<CommentType[]>(`${API_ENDPOINT.COMMENTS}/${propertyID}`);
    const hotelsNearBy = getDataRequest<OfferType[]>(`${API_ENDPOINT.HOTELS}/${propertyID}/nearby`);

    commentsData
      .then((commentsRes) => {
        const sortedComments = sortCommentsByDate(commentsRes.data);
        setComments(sortedComments.slice(0, MAX_COMMENTS));
      })
      .catch(() => {
        setComments([]);
      });

    hotelsNearBy
      .then((hotelsNearRes) => setPropertyNearBy(hotelsNearRes.data))
      .catch(() => {
        setPropertyNearBy([]);
      });

  }).catch(() => {
    browserHistory.push(ROUTES_PATHS.NOT_FOUND);
  });
}

export default sendRoomRequests;
