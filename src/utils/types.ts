import {NavigationParams, NavigationRoute, NavigationScreenConfig} from 'react-navigation';
import {
  NavigationStackOptions,
  NavigationStackProp,
  NavigationStackScreenProps,
} from 'react-navigation-stack/src/types';

type NavigationStackScreenComponent<
  Params = NavigationParams,
  ScreenProps = unknown
  > = React.ComponentType<NavigationStackScreenProps<Params, ScreenProps> & ScreenProps> & {
  navigationOptions?: NavigationScreenConfig<
    NavigationStackOptions,
    NavigationStackProp<NavigationRoute, Params>,
    ScreenProps
    >;
};

export type StackScreenComponent<TProps = {}, TParams = {}> = NavigationStackScreenComponent<TParams, TProps>;

