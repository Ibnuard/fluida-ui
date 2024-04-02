import type { ParamListBase, RouteProp } from '@react-navigation/native';
import type { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import type { StackAnimationTypes } from 'react-native-screens';

// Screen compoennt type
type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: any;
    }>
  | React.ComponentType<{}>;

// Stack Item Type
type TRouterItem<ParamList extends ParamListBase> = {
  name: keyof ParamList;
  screen: ScreenComponentType<ParamList, keyof ParamList>;
  title?: string;
};

// Create Stack Type
type TCreateRouter<ParamList extends ParamListBase> = {
  router: TRouterItem<ParamList>[];
  animation?: StackAnimationTypes;
};

// Create BottomBar Type
type TCreateBottomBar<ParamList extends ParamListBase> = {
  router: TRouterItem<ParamList>[];
  tabIcon?: (props: TBottomTabIcon) => ReactNode;
  tabLabelStyle?: StyleProp<TextStyle>;
  activeTintColor?: string;
  inactiveTintColor?: string;
  showTabOn?: string[];
  useLazy?: boolean;
  unmountOnBlur?: boolean;
  showLabel?: boolean;
};

// Bottom Bar Icon Type
type TBottomTabIcon = TTabIcon & TRouteProps;

// BottomTab Icon Base type
type TTabIcon = {
  focused: boolean;
  color: string;
  size: number;
};

// BottomTab Route Base type
type TRouteProps = {
  route: RouteProp<ParamListBase, string>;
};

export type {
  TRouterItem,
  TCreateRouter,
  TCreateBottomBar,
  ScreenComponentType,
};
