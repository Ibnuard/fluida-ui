import { FluidaUIProvider } from 'fluida-ui';
import Navigation from './Router';

export default function App() {
  const fluida = FluidaUIProvider({
    useNavigation: true,
    children: Navigation(),
  });

  return fluida;
}
