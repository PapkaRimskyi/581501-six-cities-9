import { useEffect, useRef } from 'react';

import leaflet from 'leaflet';

import useMap from '../../hooks/use-map';

import CoordType from '../../types/coord-type';
import OfferType from '../../types/offer-type';

import { MAP_CLASS } from './const';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  mainClass: MAP_CLASS,
  citySettings: CoordType,
  points: OfferType[],
  currentPoint: null | string,
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
      const markersCollection: leaflet.Marker[] = [];
      points.forEach((point) => {
        const iconType = String(point.id) === currentPoint ? currentPin : defaultPin;
        const { latitude, longitude } = point.location;
        const marker = leaflet.marker({ lat: latitude, lng: longitude }, { icon: iconType }).addTo(map);
        markersCollection.push(marker);
      });
      return () => {
        markersCollection.forEach((marker) => marker.remove());
      };
    }
  }, [map, points, currentPoint]);

  return (
    <section className={`${mainClass} map`} ref={mapRef} />
  );
}

export default Map;
