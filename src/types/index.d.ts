import type { ReactNode } from 'react';
import type { Animated } from 'react-native/Libraries/Animated/Animated';
import type { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import type { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type TContainer = {
  margin?: number;
  padding?: number;
  render: ReactNode;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};
