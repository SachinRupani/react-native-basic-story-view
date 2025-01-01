import { BasicStoryView } from './basic-story-view/BasicStoryView';
import type { PropsBasicStoryView } from './basic-story-view/data/PropsBasicStoryView';

const BasicStoryViewComponent = (props: PropsBasicStoryView) => {
  return <BasicStoryView {...props} />;
};

export default BasicStoryViewComponent;
