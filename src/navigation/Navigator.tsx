import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { TCreateBottomBar, TCreateRouter } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { ParamListBase } from '@react-navigation/native';

const Stack = createNativeStackNavigator<ParamListBase>();
const BottomTab = createBottomTabNavigator<ParamListBase>();

// Default Stack
function Router(props: TCreateRouter<ParamListBase>) {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: props.animation || 'default',
        headerShown: false,
      }}
    >
      <Stack.Group>
        {props.router.map((item, index) => {
          return (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.screen}
            />
          );
        })}
      </Stack.Group>
    </Stack.Navigator>
  );
}

// Default Bottom Tab
function BottomBar(props: TCreateBottomBar<ParamListBase>) {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (props.tabIcon) {
            return props.tabIcon({ focused, color, size, route });
          } else {
            return undefined;
          }
        },
        tabBarActiveTintColor: props.activeTintColor || 'tomato',
        tabBarInactiveTintColor: props.inactiveTintColor || 'gray',
        tabBarLabelStyle: props.tabLabelStyle,
        headerShown: false,
      })}
    >
      {props.router.map((item, index) => {
        return (
          <BottomTab.Screen
            key={index}
            name={item.name}
            component={item.screen}
            options={{
              title: item.title,
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}

export { Router, BottomBar };
