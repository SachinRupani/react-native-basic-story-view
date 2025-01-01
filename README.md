# react-native-basic-story-view

A basic story view component built using react native with typescript.

<img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" /> <img height="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png">

## Installation

```sh
npm install react-native-basic-story-view
```

OR with yarn

```sh
yarn add react-native-basic-story-view
```

## Usage

```js
import BasicStoryView from 'react-native-basic-story-view';

// ...

// dataItems : Array of items [{componentView: React.ReactNode}] //

<BasicStoryView
  additionalIndicatorBarsContainerStyle={
    stylesToUse.additionalStoryBarsContainerStyle
  }
  additionalContainerStyle={stylesToUse.additionalStoryContainerStyle}
  dataItems={storySlidesData}
  indicatorProps={{
    barRadius: 12,
    heightBar: 4,
    defaultHexCodeBarColor: '#d1d1d1', // <- default bar color hex code
    activeHexCodeBarColor: '#f432ab', // <- active/completed bar color hex code
  }}
  onCompletion={_handleStorySlidesCompletionAction}
/>;
```

## :camera_flash: Screenshots

<img width="360" height="720" src="screenshots/screenshot_1.png" alt="Screenshot1" >
<img width="360" height="720" src="screenshots/screenshot_2.png" alt="Screenshot2" >

## ❤ Show your support

Give a ⭐️ if this project helped you!

<a href="https://buymeacoffee.com/sachinrupani" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="160">
</a>

## License

```
Copyright (c) 2025 Sachin Rupani
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
