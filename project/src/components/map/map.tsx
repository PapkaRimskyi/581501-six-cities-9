import {useEffect, useRef} from 'react';

import leaflet from 'leaflet';

import useMap from '../../hooks/use-map';

import CoordType from '../../types/coordType';
import OfferType from '../../types/offerType';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  mainClass: string,
  citySettings: CoordType,
  points: OfferType[],
  currentPoint: null | number,
}

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

function Map({ mainClass, citySettings, points, currentPoint }: MapProps) {
  const mapRef = useRef<null | HTMLDivElement>(null);

  const map = useMap(mapRef, citySettings);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const iconType = point.id === currentPoint ? currentPin : defaultPin;
        const { latitude, longitude } = point.location;
        leaflet.marker({ lat: latitude, lng: longitude }, { icon: iconType }).addTo(map);
      });
    }
  }, [map, points, currentPoint]);

  return (
    <section className={`${mainClass} map`} ref={mapRef} />
  );
}

export default Map;
