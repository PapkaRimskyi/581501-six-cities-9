import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const X_COORD = 0;
const Y_COORD = 0;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(X_COORD, Y_COORD);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
