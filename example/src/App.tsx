import * as React from 'react';
import { FluidaUIProvider } from 'fluida-ui';
import Navigation from './Router';

export default function App() {
  return (
    <FluidaUIProvider useNavigation>
      <Navigation />
    </FluidaUIProvider>
  );
}
