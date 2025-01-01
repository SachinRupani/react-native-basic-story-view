import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import BasicStoryView from 'react-native-basic-story-view';
import { SampleSlideComponent } from './components/SampleSlideComponent';
import { exampleScreenStyles } from './styles/ExampleScreen.styles';

export const ExampleScreen = (): React.JSX.Element => {
  const stylesToUse = exampleScreenStyles;

  const [shouldTriggerStoryView, setShouldTriggerStoryView] =
    useState<boolean>(false);

  const storySlidesData = [
    {
      componentView: (
        <SampleSlideComponent
          title="Hello, this is a sample story view component which can be used in your react native project"
          imageUrl="https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"
        />
      ),
    },
    {
      componentView: (
        <SampleSlideComponent
          title="Hope you like the simple implementation of this `Basic Story View`"
          imageUrl="https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g"
        />
      ),
    },
    {
      componentView: (
        <SampleSlideComponent
          title="Please rate 5 star for `Basic Story View` repository on github"
          imageUrl="https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI"
        />
      ),
    },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldTriggerStoryView(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const _handleStorySlidesCompletionAction = () => {
    setShouldTriggerStoryView(false);
  };

  return (
    <View style={stylesToUse.container}>
      {shouldTriggerStoryView && (
        <BasicStoryView
          additionalIndicatorBarsContainerStyle={
            stylesToUse.additionalStoryBarsContainerStyle
          }
          additionalContainerStyle={stylesToUse.additionalStoryContainerStyle}
          dataItems={storySlidesData}
          onCompletion={_handleStorySlidesCompletionAction}
        />
      )}
    </View>
  );
};
