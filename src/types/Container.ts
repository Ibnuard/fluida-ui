import type { ReactNode } from 'react';
import type { Animated, StyleProp, ViewStyle } from 'react-native';

type TContainer = {
  margin?: number;
  padding?: number;
  render: ReactNode;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};

export type { TContainer };
