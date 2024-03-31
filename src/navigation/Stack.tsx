import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { TCreateRouter } from '../types';

const Stack = createNativeStackNavigator();

function Router(props: TCreateRouter) {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: props.animation || 'default',
      }}
    >
      {props.router.map((item, index) => {
        return (
          <Stack.Screen key={index} name={item.name} component={item.screen} />
        );
      })}
    </Stack.Navigator>
  );
}

export { Router };
