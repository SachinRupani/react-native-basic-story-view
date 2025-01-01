import { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SingleIndicatorBar } from './components/singleIndicatorBar/SingleIndicatorBar';
import { DefaultConfig } from './config/DefaultConfig';
import type { PropsBasicStoryView } from './data/PropsBasicStoryView';
import { useBasicStoryViewActions } from './hooks/useBasicStoryViewActions';
import { basicStoryViewStyles } from './styles/BasicStoryView.styles';

export const BasicStoryView = ({
  additionalContainerStyle,
  additionalIndicatorBarsContainerStyle,
  dataItems,
  indicatorProps,
  perSlideWaitDurationInSeconds,
  onCompletion,
}: PropsBasicStoryView) => {
  const styles = basicStoryViewStyles(indicatorProps);

  // Functions && state
  const { currentIndex, itemCount, moveToNextSlide, moveToPreviousSlide } =
    useBasicStoryViewActions(dataItems);

  useEffect(() => {
    const intervalDurationMilliseconds =
      (perSlideWaitDurationInSeconds ||
        DefaultConfig.perSlideWaitDurationInSeconds) * 1000;

    // setInterval (move to next slide)
    const intervalId = setInterval(() => {
      moveToNextSlide();
    }, intervalDurationMilliseconds);

    // cleanup
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const _handlePreviousClickAction = () => {
    moveToPreviousSlide();
  };

  const _handleNextClickAction = () => {
    moveToNextSlide(onCompletion);
  };

  const _renderBarIndicators = () => {
    return (
      <View
        style={[
          styles.indicatorBarsContainer,
          additionalIndicatorBarsContainerStyle
            ? additionalIndicatorBarsContainerStyle
            : null,
        ]}
      >
        {dataItems.map((_, indexBar: number) => (
          <View
            key={`IndicatorBar_${indexBar + 1}`}
            style={styles.singleBarContainer}
          >
            <SingleIndicatorBar
              propsIndicatorBar={indicatorProps}
              propsDataSingleIndicatorBar={{
                currentActiveIndex: currentIndex,
                indexIndicator: indexBar,
                slideWaitDurationInSeconds: perSlideWaitDurationInSeconds,
              }}
            />
          </View>
        ))}
      </View>
    );
  };

  const _renderChildView = () => {
    return itemCount > 0 ? dataItems[currentIndex]?.componentView : null;
  };

  const _renderPressableViews = () => {
    return (
      <View style={styles.pressableViewContainer}>
        {/* Previous */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.pressableViewPreviousStyle}
          onPress={_handlePreviousClickAction}
        />

        {/* Next */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.pressableViewNextStyle}
          onPress={_handleNextClickAction}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        additionalContainerStyle ? additionalContainerStyle : null,
      ]}
    >
      {/* Main content child view / views */}
      {_renderChildView()}

      {/* Top bar indicators */}
      {_renderBarIndicators()}

      {/* Pressable View (Previous / Next) */}
      {_renderPressableViews()}
    </View>
  );
};
