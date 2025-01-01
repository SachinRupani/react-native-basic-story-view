import { useState } from 'react';
import type { StorySlideItemDataEntity } from '../data/StorySlideItemDataEntity';

export const useBasicStoryViewActions = (
  dataItems: Array<StorySlideItemDataEntity>
) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const moveToNextSlide = (onFinalSlideClickAction?: () => void) => {
    const isLastSlide: boolean = currentIndex === dataItems.length - 1;
    if (currentIndex < dataItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (isLastSlide && onFinalSlideClickAction) {
      onFinalSlideClickAction();
    }
  };

  const moveToPreviousSlide = () => {
    const newIndex: number = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  return {
    currentIndex,
    itemCount: dataItems.length,
    moveToNextSlide,
    moveToPreviousSlide,
  };
};
