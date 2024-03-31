import { useNavigation } from '@react-navigation/native';
import { Button, Container } from 'fluida-ui';
import React from 'react';

export function Home() {
  const nav = useNavigation();
  const main = Container({
    render: (
      <Button onPress={() => nav.navigate('Profile' as never)}>HOM</Button>
    ),
  });

  return main;
}

export function Profile() {
  const main = Container({
    render: <Button>PROF</Button>,
  });

  return main;
}
