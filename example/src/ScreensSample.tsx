import { Button, Container, useNav } from 'fluida-ui';
import React from 'react';

type TTest = {
  Home: undefined;
  Profile: undefined;
  Nested: undefined;
  Tab: undefined;
  SampleA: undefined;
};

export function Home() {
  const nav = useNav<TTest>();
  return Container({
    render: <Button onPress={() => nav.navigate('Nested')}>HOM</Button>,
  });
}

export function Account() {
  const nav = useNav<TTest>();
  return Container({
    render: (
      <Button onPress={() => nav.navigate('SampleA')}>Go to Sample A</Button>
    ),
  });
}

export function SampleA() {
  return Container({
    render: <Button>Sample A</Button>,
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
