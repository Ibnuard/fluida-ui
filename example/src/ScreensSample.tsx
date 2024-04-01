import { Button, Container, useNav } from 'fluida-ui';
import React from 'react';

type TTest = {
  Home: undefined;
  Profile: undefined;
};

export function Home() {
  const nav = useNav<TTest>();
  const main = Container({
    render: <Button onPress={() => nav.navigate('Profile')}>HOM</Button>,
  });

  return main;
}

export function Profile() {
  const main = Container({
    render: <Button>PROF</Button>,
  });

  return main;
}
