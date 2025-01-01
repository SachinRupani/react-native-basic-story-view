import { StyleSheet } from 'react-native';
import { DefaultConfig } from '../../../config/DefaultConfig';
import type { PropsIndicatorBar } from '../../../data/PropsIndicatorBar';

export const singleIndicatorBarStyles = (
  propsIndicatorBar?: Partial<PropsIndicatorBar>
) => {
  const { indicatorBarDefaultActiveColor, indicatorBarRadius } = DefaultConfig;

  return StyleSheet.create({
    activeBarContainer: {
      borderRadius: propsIndicatorBar?.barRadius ?? indicatorBarRadius,
      height: '100%',
      backgroundColor:
        propsIndicatorBar?.activeHexCodeBarColor ??
        indicatorBarDefaultActiveColor,
    },
  });
};
