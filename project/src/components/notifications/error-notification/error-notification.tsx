import { useEffect, useState } from 'react';

import { LoginErrorHandlerReturnType } from '../../../errors/auth-errors/auth-errors';

const TIME_OUT = 2000;

function ErrorNotification({ errText, code }: LoginErrorHandlerReturnType) {
  const [isErrVisible, setIsErrVisible] = useState(false);

  useEffect(() => {
    if (errText) {
      setIsErrVisible(true);
      const timerID = setTimeout(() => {
        setIsErrVisible(false);
      }, TIME_OUT);
      return () => {
        clearTimeout(timerID);
        setIsErrVisible(false);
      };
    }
  }, [errText]);

  return (
    isErrVisible ? <div style={{ paddingTop: '15px', textAlign: 'center', color: 'darkRed' }}>{errText}</div> : null
  );
}

export default ErrorNotification;
