import { Dispatch, SetStateAction, useCallback } from 'react';

function useHoverCard(setCurrentPoint: Dispatch<SetStateAction<string | null>>) {
  // setCurrentPoint - функция со статичной ссылкой
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onMouseLeaveHandler = useCallback(() => setCurrentPoint(null), []);

  function onMouseEnterHandler(id: string) {
    setCurrentPoint(id);
  }

  return { onMouseEnterHandler, onMouseLeaveHandler };
}

export default useHoverCard;
