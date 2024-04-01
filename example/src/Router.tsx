import { BottomBar, Router } from 'fluida-ui';
import { Account, Home, Profile } from './ScreensSample';
import { Image } from 'react-native';
import React from 'react';

// Other Navigation
function NestedWithTab() {
  return Router({
    router: [
      { name: 'Profile', screen: Profile },
      { name: 'Tab', screen: BottomTabNav },
    ],
  });
}

// Bottom Tab
function BottomTabNav() {
  return BottomBar({
    router: [
      { name: 'Acc', screen: Account, title: 'Home Account' },
      { name: 'Acc2', screen: Account },
    ],
    tabIcon: ({ route }) => {
      let iconName;

      if (route.name === 'Acc') {
        iconName =
          'https://icons.veryicon.com/png/o/miscellaneous/home-icon-1/house-30.png';
      } else if (route.name === 'Acc2') {
        iconName = 'https://cdn-icons-png.flaticon.com/512/2919/2919906.png';
      }

      // You can return any component that you like here!
      return (
        <Image source={{ uri: iconName }} style={{ width: 24, height: 24 }} />
      );
    },
  });
}

// Main Navigation
export default function Navigation() {
  // Main Routes
  return Router({
    animation: 'ios',
    router: [
      { name: 'Main', screen: Home },
      { name: 'Nested', screen: NestedWithTab },
    ],
  });
}
