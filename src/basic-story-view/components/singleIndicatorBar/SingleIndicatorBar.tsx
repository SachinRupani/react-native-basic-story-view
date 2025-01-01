import { useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { DefaultConfig } from '../../config/DefaultConfig';
import type { PropsDataSingleIndicatorBar } from '../../data/PropsDataSingleIndicatorBar';
import type { PropsIndicatorBar } from '../../data/PropsIndicatorBar';
import { singleIndicatorBarStyles } from './styles/SingleIndicatorBar.styles';

export type PropsSingleIndicatorBar = {
  propsIndicatorBar?: Partial<PropsIndicatorBar>;
  propsDataSingleIndicatorBar: PropsDataSingleIndicatorBar;
};

export const SingleIndicatorBar = ({
  propsIndicatorBar,
  propsDataSingleIndicatorBar,
}: PropsSingleIndicatorBar) => {
  const styles = singleIndicatorBarStyles(propsIndicatorBar);

  const animation = useRef(new Animated.Value(0)).current;

  const { currentActiveIndex, indexIndicator, slideWaitDurationInSeconds } =
    propsDataSingleIndicatorBar;

  const isActiveSlide = indexIndicator <= currentActiveIndex;

  const _startAnimation = () => {
    const slideWaitDurationMilliseconds: number =
      (slideWaitDurationInSeconds ||
        DefaultConfig.perSlideWaitDurationInSeconds) * 1000;
    Animated.timing(animation, {
      toValue: 100,
      duration: slideWaitDurationMilliseconds,
      useNativeDriver: false,
    }).start();
  };

  const _stopAnimation = () => {
    animation.stopAnimation(() => animation.setValue(100));
  };

  const animationWidth = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  useMemo(() => {
    if (indexIndicator === currentActiveIndex) {
      animation.setValue(0);
      _startAnimation();
    } else if (indexIndicator < currentActiveIndex) {
      _stopAnimation();
    } else {
      animation.setValue(0);
    }
  }, [indexIndicator, currentActiveIndex]);

  return (
    <Animated.View
      key={`SingleIndicatorBar-${indexIndicator}`}
      style={[
        isActiveSlide ? styles.activeBarContainer : null,
        { width: animationWidth },
      ]}
    />
  );
};
