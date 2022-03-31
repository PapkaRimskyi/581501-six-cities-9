import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePrevious from '../../hooks/use-previous';

import sendRoomRequests from './request/request';

import Gallery from '../../components/property/gallery/gallery';
import Property from '../../components/property/property';
import Map from '../../components/map/map';
import NearPlaces from '../../components/property/near-places/near-places';
import LoadingNotification from '../../components/notifications/loading-notification/loading-notification';

import OfferType from '../../types/offer-type/offer-type';
import CommentType from '../../types/offer-type/comment-type/comment-type';

import { MAP_CLASS } from '../../components/map/const';

function Room() {
  const [currentPoint, setCurrentPoint] = useState<null | string>(null);
  const [currentProperty, setCurrentProperty] = useState<null | OfferType>(null);
  const [propertyNearBy, setPropertyNearBy] = useState<OfferType[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);

  const settersCollection = useMemo(() => ({ setCurrentProperty, setPropertyNearBy, setComments, setCurrentPoint }), []);

  const param = useParams();
  const prevParam = usePrevious(param.id);

  useEffect(() => {
    const propertyID = param.id as string;
    sendRoomRequests(propertyID, settersCollection);
  }, []);

  useEffect(() => {
    if (prevParam && prevParam !== param.id) {
      const propertyID = param.id as string;
      sendRoomRequests(propertyID, settersCollection);
    }
  }, [param.id]);

  return (
    <div className="page">
      <main className="page__main page__main--property">
        {currentProperty ? (
          <>
            <section className="property">
              <Gallery images={currentProperty.images} />

              <Property currentProperty={currentProperty} comments={comments} setComments={setComments} />

              <div style={{ maxWidth: '1144px', margin: '0 auto' }}>
                <Map mainClass={MAP_CLASS.PROPERTY_MAP} citySettings={currentProperty.city.location} points={[currentProperty, ...propertyNearBy]} currentPoint={currentPoint} />
              </div>

            </section>

            <div className="container">
              <NearPlaces propertyNearBy={propertyNearBy} />
            </div>
          </>
        ) : <LoadingNotification />}
      </main>
    </div>
  );
}

export default Room;
