import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'fluida-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Halo</Text>
      <Button onPress={() => console.log('HUM')}>Halo ini button</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
