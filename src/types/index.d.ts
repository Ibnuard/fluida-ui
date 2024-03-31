import type { ParamListBase, RouteProp } from '@react-navigation/native';
import type { ReactNode } from 'react';
import type { ProviderProps } from 'react-native-paper';
import type { StackAnimationTypes } from 'react-native-screens';
import type { Animated } from 'react-native/Libraries/Animated/Animated';
import type { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import type { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

// Provider Types
interface IProvider extends ProviderProps {
  useNavigation?: boolean;
}

// Container Types
export type TContainer = {
  margin?: number;
  padding?: number;
  render: ReactNode;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};

// ==== Navigation Section

// createRouter types
type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: any;
    }>
  | React.ComponentType<{}>;

type TRouterItem = {
  name: string;
  screen: ScreenComponentType;
};

export type TCreateRouter = {
  router: TRouterItem[];
  animation?: StackAnimationTypes;
};
