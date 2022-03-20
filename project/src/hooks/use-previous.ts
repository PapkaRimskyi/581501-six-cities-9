import { useEffect, useRef } from 'react';

function usePrevious<P>(value: P) {
  const ref = useRef<P>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
