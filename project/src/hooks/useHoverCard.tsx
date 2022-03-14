import { Dispatch, SetStateAction, useCallback } from 'react';

function useHoverCard(setCurrentPoint: Dispatch<SetStateAction<number | null>>) {
  const onMouseLeaveHandler = useCallback(() => setCurrentPoint(null), []);

  function onMouseEnterHandler(id: number) {
    setCurrentPoint(id);
  }

  return { onMouseEnterHandler, onMouseLeaveHandler };
}

export default useHoverCard;
