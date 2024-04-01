import type { ParamListBase, RouteProp } from '@react-navigation/native';
import type { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import type { StackAnimationTypes } from 'react-native-screens';

type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: any;
    }>
  | React.ComponentType<{}>;

type TRouterItem<ParamList extends ParamListBase> = {
  name: keyof ParamList;
  screen: ScreenComponentType<ParamList, keyof ParamList>;
  title?: string;
};

type TCreateRouter<ParamList extends ParamListBase> = {
  router: TRouterItem<ParamList>[];
  animation?: StackAnimationTypes;
};

type TCreateBottomBar<ParamList extends ParamListBase> = {
  router: TRouterItem<ParamList>[];
  tabIcon?: (props: TBottomTabIcon) => ReactNode;
  tabLabelStyle?: StyleProp<TextStyle>;
  activeTintColor?: string;
  inactiveTintColor?: string;
};

type TBottomTabIcon = TTabIcon & TRouteProps;

type TTabIcon = {
  focused: boolean;
  color: string;
  size: number;
};

type TRouteProps = {
  route: RouteProp<ParamListBase, string>;
};

export type {
  TRouterItem,
  TCreateRouter,
  TCreateBottomBar,
  ScreenComponentType,
};
