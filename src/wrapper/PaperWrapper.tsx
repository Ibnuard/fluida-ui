import React from 'react';
import { PaperProvider, type ProviderProps } from 'react-native-paper';

const FluidaUIProvider = (props: ProviderProps) => {
  return <PaperProvider {...props}>{props.children}</PaperProvider>;
};

export default FluidaUIProvider;
