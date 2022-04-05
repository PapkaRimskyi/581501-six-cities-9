import { useEffect, useState } from 'react';

import ErrorHandlerType from '../../../types/error-type/error-handler-type/error-handler-type';

type ErrorNotificationType = {
  error: ErrorHandlerType,
}

const TIME_OUT = 2000;

function ErrorNotification({ error }: ErrorNotificationType) {
  const [isErrVisible, setIsErrVisible] = useState(false);

  useEffect(() => {
    console.log(error);
    if (error.errText) {
      setIsErrVisible(true);
      const timerID = setTimeout(() => {
        setIsErrVisible(false);
      }, TIME_OUT);
      return () => {
        clearTimeout(timerID);
        setIsErrVisible(false);
      };
    }
  }, [error]);

  return (
    isErrVisible ? <div style={{ paddingTop: '15px', textAlign: 'center', color: 'darkRed' }}>{error.errText}</div> : null
  );
}

export default ErrorNotification;
