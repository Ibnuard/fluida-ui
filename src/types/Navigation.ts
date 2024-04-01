import type { ParamListBase, RouteProp } from '@react-navigation/native';
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
  name: string;
  screen: ScreenComponentType<ParamList, keyof ParamList>;
};

type TCreateRouter = {
  router: TRouterItem<ParamListBase>[];
  animation?: StackAnimationTypes;
};

export type { TRouterItem, TCreateRouter };
