import { Router } from 'fluida-ui';
import { Home, Profile } from './ScreensSample';

export default function Navigation() {
  const router = Router({
    animation: 'ios',
    router: [
      { name: 'Main', screen: Home },
      { name: 'Profile', screen: Profile },
    ],
  });

  return router;
}
