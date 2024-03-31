import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import type { TContainer } from '../../types';

const Container = (props: TContainer) => {
  return <View style={styles.container}>{props.render}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Container;
