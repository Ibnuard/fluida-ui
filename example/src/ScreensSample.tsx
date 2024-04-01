import { Button, Container, useNav } from 'fluida-ui';
import React from 'react';

type TTest = {
  Home: undefined;
  Profile: undefined;
  Nested: undefined;
  Tab: undefined;
};

export function Home() {
  const nav = useNav<TTest>();
  return Container({
    render: <Button onPress={() => nav.navigate('Nested')}>HOM</Button>,
  });
}

export function Account() {
  return Container({
    render: <Button>ACC</Button>,
  });
}

export function Nested() {
  return Container({
    render: <Button>Nested</Button>,
  });
}

export function Profile() {
  const nav = useNav<TTest>();
  return Container({
    render: <Button onPress={() => nav.navigate('Tab')}>Go to Tab</Button>,
  });
}
