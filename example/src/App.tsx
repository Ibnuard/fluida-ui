import * as React from 'react';
import { Button, Container } from 'fluida-ui';

export default function App() {
  const main = Container({
    render: <Button onPress={() => console.log('HE SO YAM')}>HOHO</Button>,
  });

  return main;
}
