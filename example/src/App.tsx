import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, Container } from 'fluida-ui';

export default function App() {
  const main = Container({
    render: <Button onPress={() => console.log('HE SO YAM')}>HOHO</Button>,
  });

  return main;
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
