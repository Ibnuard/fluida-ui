import * as React from 'react';
import { View, Text } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function simpleText() {
  return (
    <View>
      <Text>Simple text v1.0</Text>
    </View>
  );
}
