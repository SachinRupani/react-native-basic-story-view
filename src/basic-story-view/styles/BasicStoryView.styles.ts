import { StyleSheet } from 'react-native';
import { DefaultConfig } from '../config/DefaultConfig';
import type { PropsIndicatorBar } from '../data/PropsIndicatorBar';

export const basicStoryViewStyles = (
  propsIndicatorBar?: Partial<PropsIndicatorBar>
) => {
  const {
    indicatorBarsGap,
    indicatorBarsContainerPadding,
    indicatorBarDefaultBgColor,
    indicatorBarHeight,
    indicatorBarRadius,
  } = DefaultConfig;

  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
    },

    indicatorBarsContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      gap: indicatorBarsGap,
      padding: indicatorBarsContainerPadding,
    },

    singleBarContainer: {
      flex: 1,
      height: propsIndicatorBar?.heightBar ?? indicatorBarHeight,
      borderRadius: propsIndicatorBar?.barRadius ?? indicatorBarRadius,
      backgroundColor:
        propsIndicatorBar?.defaultHexCodeBarColor ?? indicatorBarDefaultBgColor,
      overflow: 'hidden',
    },

    pressableViewContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row',
    },

    pressableViewPreviousStyle: {
      flex: 1,
    },

    pressableViewNextStyle: {
      flex: 1,
    },
  });
};
