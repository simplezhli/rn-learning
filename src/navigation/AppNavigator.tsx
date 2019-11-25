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
import PanResponderLearning from '../screens/PanResponderLearning';
import {PushyDemo} from '../screens/PushyDemo';
import {Icon} from 'native-base';
import {NavigatorDemo} from '../screens/NavigatorDemo';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

const DrawerScreens = createDrawerNavigator(
  {
    TestPage1: {
      screen: NavigatorDemo,
      params: {'content': '点击打开抽屉'},
      navigationOptions: {
        drawerLabel: '苹果',
        drawerIcon: ({tintColor}) => (
          <Icon name="logo-apple" style={{color: tintColor}}/>
        )
      }
    },
    TestPage2: {
      screen: NavigatorDemo,
      params: {'content': '披萨'},
      navigationOptions: {
        drawerLabel: '披萨',
        drawerIcon: ({tintColor}) => (
          <Icon name="pizza" style={{color: tintColor}}/>
        )
      }
    },
    TestPage3: {
      screen: NavigatorDemo,
      params: {'content': '啤酒'},
      navigationOptions: {
        drawerLabel: '啤酒',
        drawerIcon: ({tintColor}) => (
          <Icon name="beer" style={{color: tintColor}}/>
        )
      }
    },
  },
  {
    initialRouteName: 'TestPage1',
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

const TopTabScreens = createMaterialTopTabNavigator(
  {
    TestPage1: {
      screen: NavigatorDemo,
      navigationOptions: {
        tabBarLabel: '苹果',
      },
      params: {'content': 'TestPage1'}
    },
    TestPage2: {
      screen: NavigatorDemo,
      navigationOptions: {
        tabBarLabel: '披萨',
      },
      params: {'content': 'TestPage2'}
    },
    TestPage3: {
      screen: NavigatorDemo,
      navigationOptions: {
        tabBarLabel: '啤酒',
      },
      params: {'content': 'TestPage3'}
    }
  },{
    backBehavior: 'none',
    swipeEnabled: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      },
      tabStyle: {
        width: 90,
      },
      activeTintColor: colors.primary,
      inactiveTintColor: colors.dark,
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: colors.primary,
      }
    }
  }
);

const TabScreens = createBottomTabNavigator(
  {
    TestPage1: {
      screen: TopTabScreens,
      navigationOptions: {
        tabBarLabel: '苹果',
        tabBarIcon: ({ tintColor }: string) => <Icon name="logo-apple" style={{ color: tintColor }} />
      },
    },
    TestPage2: {
      screen: DrawerScreens,
      navigationOptions: {
        tabBarLabel: '披萨',
        tabBarIcon: ({ tintColor }: string) => <Icon name="pizza" style={{ color: tintColor }}/>
      },
    },
    TestPage3: {
      screen: NavigatorDemo,
      navigationOptions: {
        tabBarLabel: '啤酒',
        tabBarIcon: ({ tintColor }: string) => <Icon name="beer" style={{ color: tintColor }}/>
      },
      params: {'content': 'TestPage3'}
    },
  },
  {
    initialRouteName: 'TestPage1',
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.dark,
      labelStyle: {
        fontSize: 12,
      },
      showLabel: true
    },
  }
);

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
    },
    PanResponder: {
      screen: PanResponderLearning,
      navigationOptions: {
        title: 'PanResponderLearning'
      }
    },
    Pushy: {
      screen: PushyDemo,
      navigationOptions: {
        title: 'PushyDemo'
      }
    },
    Navigator: {
      screen: TabScreens,
      navigationOptions: {
        title: 'NavigatorDemo'
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
