import {useEffect, useRef} from 'react';

import leaflet from 'leaflet';

import useMap from '../../hooks/useMap';

import CoordType from '../../types/coordType';
import OfferType from '../../types/offerType';

type MapProps = {
  mainClass: string,
  citySettings: CoordType,
  points: OfferType[],
  currentPoint: null | number,
}


function Map({ mainClass, citySettings, points, currentPoint }: MapProps) {
  const mapRef = useRef<null | HTMLDivElement>(null);

  const map = useMap(mapRef, citySettings);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet.marker({ lat: point.location.latitude, lng: point.location.longitude }, { icon: point.id === currentPoint ? currentPin : defaultPin }).addTo(map);
      });
    }
  }, [map, points, currentPoint]);

  const defaultPin = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentPin = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <section className={`${mainClass} map`} ref={mapRef} />
  );
}

export default Map;
