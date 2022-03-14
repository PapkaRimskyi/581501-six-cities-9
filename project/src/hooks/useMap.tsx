import { useEffect, useState } from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import CoordType from '../types/coordType';

function useMap(mapRef: React.MutableRefObject<HTMLDivElement | null>, citySettings: CoordType) {
  const [map, setMap] = useState<null | leaflet.Map>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, { center: [citySettings.latitude, citySettings.longitude] , zoom: citySettings.zoom });
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        ).addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, citySettings]);

  return map;
}

export default useMap;
