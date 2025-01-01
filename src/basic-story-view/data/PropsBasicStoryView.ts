import type { PropsIndicatorBar } from './PropsIndicatorBar';
import type { StorySlideItemDataEntity } from './StorySlideItemDataEntity';

export interface PropsBasicStoryView {
  dataItems: Array<StorySlideItemDataEntity>;
  additionalIndicatorBarsContainerStyle?: any;
  indicatorProps?: Partial<PropsIndicatorBar>;
  perSlideWaitDurationInSeconds?: number;
  additionalContainerStyle?: any;
  onCompletion?: () => void;
}
