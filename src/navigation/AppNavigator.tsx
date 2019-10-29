import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {MainPage} from "../screens/MainPage";
import TextLearning from "../screens/TextLearning";
import ViewLearning from "../screens/ViewLearning";
import TextInputLearning from "../screens/TextInputLearning";
import TouchableLearning from "../screens/TouchableLearning";
import ImageLearning from "../screens/ImageLearning";
import {AsyncStorageLearning} from "../screens/AsyncStorageLearning";

const mainNavigator = createStackNavigator(
  {
    Main: MainPage,
    View: ViewLearning,
    Text: TextLearning,
    TextInput: TextInputLearning,
    Touchable: TouchableLearning,
    Image: ImageLearning,
    AsyncStorage: AsyncStorageLearning,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
);

export default createAppContainer(mainNavigator);
