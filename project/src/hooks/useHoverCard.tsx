import { Dispatch, SetStateAction, useCallback } from 'react';

function useHoverCard(setCurrentPoint: Dispatch<SetStateAction<number | null>>) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // setCurrentPoint - функция со статичной ссылкой
  const onMouseLeaveHandler = useCallback(() => setCurrentPoint(null), []);

  function onMouseEnterHandler(id: number) {
    setCurrentPoint(id);
  }

  return { onMouseEnterHandler, onMouseLeaveHandler };
}

export default useHoverCard;
