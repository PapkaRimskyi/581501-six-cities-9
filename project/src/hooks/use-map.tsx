import { useEffect, useState } from 'react';

import leaflet from 'leaflet';

import CoordType from '../types/coord-type';

const URL_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

function useMap(mapRef: React.MutableRefObject<HTMLDivElement | null>, citySettings: CoordType) {
  const [map, setMap] = useState<null | leaflet.Map>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, { center: [citySettings?.latitude, citySettings?.longitude] , zoom: citySettings?.zoom });
      leaflet
        .tileLayer(
          URL_LAYER,
        ).addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, citySettings]);

  useEffect(() => {
    if (map) {
      map.setView([citySettings?.latitude, citySettings?.longitude], citySettings?.zoom);
    }
  }, [citySettings, map]);

  return map;
}

export default useMap;
