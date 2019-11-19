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
import {CalendarDemo} from '../screens/CalendarDemo';
import {SwiperDemo} from '../screens/SwiperDemo';
import {ModalDemo} from '../screens/ModalDemo';
import {AxiosDemo} from '../screens/AxiosDemo';
import {HeaderProps} from 'react-navigation-stack/src/types';
import {MyTitle} from '../components/MyTitle';
import ReduxLearning from '../screens/ReduxLearning';
import WebViewLearning from '../screens/WebViewLearning';

const mainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainPage,
      navigationOptions: {
        title: 'RN Learning'
      }
    },
    View: {
      screen: ViewLearning,
      navigationOptions: {
        title: 'View'
      }
    },
    Text: {
      screen: TextLearning,
      navigationOptions: {
        title: 'Text'
      }
    },
    TextInput: {
      screen: TextInputLearning,
      navigationOptions: {
        title: 'TextInput'
      }
    },
    Touchable: {
      screen: TouchableLearning,
      navigationOptions: {
        title: 'Touchable'
      }
    },
    Image: {
      screen: ImageLearning,
      navigationOptions: {
        title: 'Image'
      }
    },
    AsyncStorage: {
      screen: AsyncStorageLearning,
      navigationOptions: {
        title: 'AsyncStorage'
      }
    },
    CartPage: {
      screen: CartPage,
      navigationOptions: {
        title: '购物车'
      }
    },
    MenuList: {
      screen: MenuListDemo,
      navigationOptions: {
        title: 'MenuListDemo'
      }
    },
    Calendar: {
      screen: CalendarDemo,
      navigationOptions: {
        title: 'CalendarDemo'
      }
    },
    Swiper: {
      screen: SwiperDemo,
      navigationOptions: {
        title: 'SwiperDemo'
      }
    },
    Modal: {
      screen: ModalDemo,
      navigationOptions: {
        title: 'ModalDemo'
      }
    },
    Axios: {
      screen: AxiosDemo,
      navigationOptions: {
        title: 'AxiosDemo'
      }
    },
    Redux: {
      screen: ReduxLearning,
      navigationOptions: {
        title: 'ReduxLearning'
      }
    },
    WebView: {
      screen: WebViewLearning,
      navigationOptions: {
        title: 'WebViewLearning'
      }
    }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: (props: HeaderProps) => <MyTitle {...props}/>,
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: colors.default,
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }
  }
);

export default createAppContainer(mainNavigator);
