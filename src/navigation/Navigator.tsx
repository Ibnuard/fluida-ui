import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { TCreateBottomBar, TCreateRouter } from '../types';
import {
  getFocusedRouteNameFromRoute,
  type ParamListBase,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        lazy: props.useLazy,
        unmountOnBlur: props.unmountOnBlur,
        tabBarShowLabel: props.showLabel,
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (props.showTabOn?.includes(routeName) || !routeName) {
            return { display: 'flex', position: 'absolute' };
          } else {
            return { display: 'none', position: 'absolute' };
          }
        })(route),
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
