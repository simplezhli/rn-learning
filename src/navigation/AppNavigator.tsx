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
import {colors} from '../styles/Colors';
import {CartPage} from '../screens/CartPage';
import {MenuListDemo} from '../screens/MenuListDemo';

const mainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainPage,
      navigationOptions: {
        title: '首页',
      }
    },
    View: {
      screen: ViewLearning,
      navigationOptions: {
        title: 'View',
      }
    },
    Text: {
      screen: TextLearning,
      navigationOptions: {
        title: 'Text',
      }
    },
    TextInput: {
      screen: TextInputLearning,
      navigationOptions: {
        title: 'TextInput',
      }
    },
    Touchable: {
      screen: TouchableLearning,
      navigationOptions: {
        title: 'Touchable',
      }
    },
    Image: {
      screen: ImageLearning,
      navigationOptions: {
        title: 'Image',
      }
    },
    AsyncStorage: {
      screen: AsyncStorageLearning,
      navigationOptions: {
        title: 'AsyncStorage',
      }
    },
    CartPage: {
      screen: CartPage,
      navigationOptions: {
        title: '购物车',
      }
    },
    MenuListDemo: {
      screen: MenuListDemo,
      navigationOptions: {
        title: 'MenuListDemo',
      }
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'screen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: colors.default,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default createAppContainer(mainNavigator);
