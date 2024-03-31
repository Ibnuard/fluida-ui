import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import type { IProvider } from '../types';

const FluidaUIProvider = (props: IProvider) => {
  return (
    <PaperProvider {...props}>
      {props.useNavigation ? (
        <NavigationContainer>{props.children}</NavigationContainer>
      ) : (
        props.children
      )}
    </PaperProvider>
  );
};

export default FluidaUIProvider;
